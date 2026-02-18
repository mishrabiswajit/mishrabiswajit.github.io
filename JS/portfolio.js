// Get current date
var current = new Date();

// Your birth details (2 September 2003)
// Month index 8 = September (JS months start from 0)
var birthYear = 2003;
var birthMonth = 8;
var birthDate = 2;

// Basic age calculation
var age = current.getFullYear() - birthYear;

// Check if birthday has already happened this year
if (
   current.getMonth() < birthMonth || (current.getMonth() === birthMonth && current.getDate() < birthDate)
) {
   age--; // If birthday not yet occurred, reduce age by 1
}

// Check if today is your birthday
if (current.getDate() === birthDate && current.getMonth() === birthMonth) {

   document.getElementById("birthday").innerText =
      `I'm Biswajit Mishra! Today’s my birthday, and I turned ${age} years old today.`;

   // Ask for wish after 8 seconds
   setTimeout(function () {
      var wish = confirm("Wanna Wish me?");
      if (wish) {
         window.location.href = "https://t.me/mishrabiswajit";
      } else {
         alert("You made me cry 😭😭");
      }
   }, 8000);

} else {

   // Normal message for rest of the year
   document.getElementById("birthday").innerText =
      `I'm Biswajit Mishra, ${age}-year-old tech enthusiast.`;
}


// Clock Function
setInterval(() => {
   // Get the current local time
   var local_time = new Date();
   // Convert local time to Indian Standard Time (IST)
   var india_time = new Date(local_time.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

   // Extract hours, minutes, and seconds
   var hours = india_time.getHours();
   var minutes = india_time.getMinutes();
   var seconds = india_time.getSeconds();
   var AM_PM = "AM"; // Default AM/PM

   // Determine the appropriate greeting based on the time of day
   if (3 <= hours && hours < 12 && AM_PM === "AM") {
      document.getElementById("greet").innerText = ", Good Morning !!\n";
   }

   // AM/PM Converter
   if (hours >= 12) {
      AM_PM = "PM";
      hours -= 12;
      //Greet Function
      if (0 <= hours && hours <= 3 && AM_PM == "PM") {
         document.getElementById("greet").innerText = ", Good Afternoon !!\n";
      }
      else if (4 <= hours && hours <= 7 && AM_PM == "PM") {
         document.getElementById("greet").innerText = ", Good Evening !!\n";
      }
   }

   // Zero inserter
   if (hours < 10) {
      hours = "0" + hours;
      if (hours == 0) {
         hours = 12;
      }
   }
   if (minutes < 10) {
      minutes = "0" + minutes;
   }
   if (seconds < 10) {
      seconds = "0" + seconds;
   }

   // Final String
   document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${AM_PM}`;
}, 1000); // Update every second