// Collecting anonymous user data.
let isConsent = false;

function sendInfo(activity) {
  $.post("https://agstats.herokuapp.com/" + activity, {
    message: activity,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
}

const startTime = performance.now()
let isScrolled = false;
let isRead = false;

$(".consent-button").on("click", function() {
  if (this.name === "accept") {
    isConsent = true;
    sendInfo("view")
  }
  $(".consent").remove();
});

$(window).scroll(function() {

  function elementScrolled(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }

  if (elementScrolled(".footer") & !isScrolled) {
    isScrolled = true
  }

  if (isScrolled & (performance.now() - startTime > 30000) & !isRead & isConsent) {
    sendInfo("read")
    isRead = true;
  }
});



// Pinging of my other websites to enable their faster loading
let isClicked = false;

document.addEventListener("click", function(event) {

  if (!isClicked) {
    $.get("https://neurvid.herokuapp.com")
    $.get("https://freqexam.herokuapp.com")
    $.get("https://freq-report.herokuapp.com/?name=A&lower=20&upper=15000")
    $.get("https://papaclock.herokuapp.com/")
  }
  isClicked = true

});



// Automatic display of current date
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

document.getElementById("date").innerHTML = months[month] + " " + year;
document.getElementsByTagName("h5")[0].innerHTML = "© " + year + " Adam Grzelak";
