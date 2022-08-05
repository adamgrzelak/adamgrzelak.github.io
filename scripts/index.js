// Collecting anonymous user data.
function sendInfoLocale(activity) {
  $.post("https://agstats.herokuapp.com/" + activity, {
    message: activity,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
}

function sendInfoEmpty(activity) {
  $.post("https://agstats.herokuapp.com/" + activity, {
    message: activity,
    timezone: null
  });
}

const startTime = performance.now()
let isScrolled = false;
let isConsent = false;
let isRead = false;
let isViewed = false;

$(".consent-button").on("click", function() {
  if (this.name === "accept") {
    isConsent = true;
  }
  $(".consent").remove();
});

$(window).scroll(function() {

  if (!isViewed) {
    if (isConsent) {
      sendInfoLocale("view");
    } else {
      sendInfoEmpty("view");
    }
    isViewed = true;
  }

  function elementScrolled(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }

  if (elementScrolled(".footer") & !isScrolled) {
    isScrolled = true
  }

  if (isScrolled & (performance.now() - startTime > 30000) & !isRead) {
    if (isConsent) {
      sendInfoLocale("read");
    } else {
      sendInfoEmpty("read");
    }
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
    $.get("https://agstats.herokuapp.com/")
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
