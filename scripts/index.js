let isClicked = false;

document.addEventListener("click", function(event) {

  if (!isClicked) {

    fetch("https://neurvid.herokuapp.com")

    fetch("https://freqexam.herokuapp.com")

    fetch("https://freq-report.herokuapp.com/?name=A&lower=20&upper=15000")

  }

  isClicked = true

});

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

document.getElementById("date").innerHTML = months[month] + " " + year;
document.getElementByTagName("h5").innerHTML = "© " + year + " Adam Grzelak";
