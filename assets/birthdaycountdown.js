var currentYear = new Date().getFullYear()
if (new Date().getTime() > new Date("April 7 " + currentYear + " 12:00:00").getTime())
{
	currentYear += 1
}
var countDownDate = new Date("April 5 " + currentYear + " 12:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
if (days >= 30) {
	var months = Math.round(days / 30);
	if (months==1){document.getElementById("days").innerHTML = months + " month left until birthday";} 
	else {document.getElementById("days").innerHTML = months + " months left until birthday";}
}
else if (days == 0) {document.getElementById("days").innerHTML = "My birthday is tomorrow!"}
else if (days == -1) {document.getElementById("days").innerHTML = "Today is my birthday!"}
else if (days == -2) {document.getElementById("days").innerHTML = "My birthday was yesterday"}
else if (days <= -3) {document.getElementById("days").innerHTML = "This idiot made such a shit script it literally didn't do the job and broke, somebody remind him pls"}
else {document.getElementById("days").innerHTML = days+1 + " days left until birthday" ;}