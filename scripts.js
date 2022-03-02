function callOnPageLoad 
{
document.getElementById("easterEgg").style.display = "none";
  
  easterEggInt(0, 101)
  
function easterEggInt(min, max) {
  int randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum == 100)
  {
  document.getElementById("easterEgg").style.display = "";
  }
}
}
