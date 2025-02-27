var currentYear = new Date().getFullYear()
if (new Date().getTime() > new Date("April 7 " + currentYear + " 12:00:00").getTime())
{
	currentYear += 1
}
var countDownDate = new Date("April 5 " + currentYear + " 12:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var birthdayElement = document.getElementById("days");

function updateBirthdayText(text) {
  // Create the new content (keeping the label intact)
  const label = birthdayElement.querySelector('.info-label');
  birthdayElement.innerHTML = '';
  birthdayElement.appendChild(label);
  
  // Create a span for the text with the same styling as other text
  const textSpan = document.createElement('span');
  textSpan.textContent = ' ' + text;
  textSpan.classList.add("info-label");
  
  // Append the styled text
  birthdayElement.appendChild(textSpan);
}

if (days >= 30) {
	var months = Math.round(days / 30);
	if (months==1) {
    updateBirthdayText("April 5th - " + months + " month left");
  } else {
    updateBirthdayText("April 5th - " + months + " months left");
  }
}
else if (days == 0) {
  updateBirthdayText("April 5th - Tomorrow!");
}
else if (days == -1) {
  updateBirthdayText("April 5th - Today!");
}
else if (days == -2) {
  updateBirthdayText("April 5th - Yesterday");
}
else if (days <= -3) {
  updateBirthdayText("April 5th");
}
else {
  updateBirthdayText("April 5th - " + (days+1) + " days left");
}