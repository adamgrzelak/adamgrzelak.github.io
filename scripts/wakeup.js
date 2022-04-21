var isClicked = false;

document.addEventListener("click", function(event) {

  isClicked = true

  fetch("https://neurvid.herokuapp.com")

  fetch("https://freqexam.herokuapp.com")

  fetch("https://freq-report.herokuapp.com/?name=A&lower=20&upper=15000")

});
