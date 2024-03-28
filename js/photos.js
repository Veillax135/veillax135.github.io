document.addEventListener('DOMContentLoaded', function () {
    fetch(`https://zany-rose-boa-tie.cyclic.app/extract?url=https://photos.app.goo.gl/tjVCd5hZi5GiZzPx8`)
        .then(response => response.json())
        .then(imageDict => {
            const photoList = document.getElementById('photo-list');
            const imageUrls = imageDict.photoUrls
            imageUrls.forEach(imageUrl => {
                const photoDiv = document.createElement('div');
                photoDiv.className = 'card border-primary mt-1 mb-1 col-md-4'; // Bootstrap column class

                photoDiv.innerHTML = `
                <div class="card-body">
                    <h4 class="card-title">
=                        <img src="${imageUrl}" alt="Image" class="card-img">
=                    </h4>
                </div>
            `;

                photoList.appendChild(photoDiv);
            });
        })
        .catch(error => console.error('Error fetching photos:', error));
});
