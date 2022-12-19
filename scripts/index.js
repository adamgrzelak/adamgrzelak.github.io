// Automatic display of current date
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

$("#dateA")[0].innerHTML = months[month] + " " + year;
$("#dateB")[0].innerHTML = months[month] + " " + year;
$("h5")[0].innerHTML = "© " + year + " Adam Grzelak";
