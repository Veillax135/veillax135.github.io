// watch.js
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('v');
const apiBase = "/php/proxy.php"; // Point to the PHP proxy location
let elapsed = 0;
let eta = 0;

function secondsToHMS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

  let formattedTime = '';

  if (hours > 0) {
    formattedTime += addLeadingZero(hours) + ':';
  }

  formattedTime += addLeadingZero(minutes) + ':' + addLeadingZero(remainingSeconds);

  return formattedTime;
}

function estimateDownloadTime(videoLengthInSeconds) {
  const downloadRate = 0.09116711;
  const estimatedTime = Math.round(downloadRate * videoLengthInSeconds - 0.5);
  return estimatedTime;
}

function barCode() {
  if (eta > elapsed) {
    elapsed++;
    document.getElementById("progressBar").style.width = ((elapsed / eta) * 100) + '%';
    document.getElementById("timetext").innerHTML = "ETA " + secondsToHMS(elapsed) + "/" + secondsToHMS(eta);
  }
  setTimeout(function () {
    barCode();
  }, 1000);
}

function load() {
  var dataBox = document.getElementById('databox')
  console.log("Fetching track data from API...");
  axios.get(apiBase + "?endpoint=api/get/trackDataYT&v=" + videoId)
    .then(response => {
      console.log("Track data received:", response.data);
      videoLength = parseInt(response.data.length);
      eta = estimateDownloadTime(videoLength)
      console.log("Estimated time for download (ETA): " + secondsToHMS(eta));
      dataBox.innerHTML = `
        <h5 id="timetext" style="margin-left:45%;">ETA 00:00/` + secondsToHMS(eta) + `</h5>
        <div class="progress" style="width:60%">
          <div class="progress-bar" role="progressbar" id="progressBar" style=""></div>
        </div>
      `;

      elapsed = -1;
      barCode();

      console.log("Fetching video data from API...");
      axios.get(apiBase + "?endpoint=api/get/video&v=" + videoId)
        .then(response2 => {
          console.log('Video download completed:', response2.data);
          // Handle the video data here
        })
        .catch(error => {
          console.error('Error fetching video data:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching track data:', error);
    });
}