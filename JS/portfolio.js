// Initialize the current date
var current = new Date();

// Check if today is September 2nd (month index 8 for September in JavaScript)
if (current.getDate() === 2 && current.getMonth() === 8) {
   // Display birthday message
   document.getElementById("birthday").innerText = `I'm Biswajit Mishra! Today’s my birthday, and I turned ${current.getFullYear() - 2003} years old today.`;

   // Wish Function: Prompt user to wish after 8 seconds
   setTimeout(function () {
      var wish = confirm("Wanna Wish me?");
      if (wish) {
         // Redirect to Telegram if the user wishes
         window.location.href = "https://t.me/mishrabiswajit";
      } else {
         // Show a sad message if the user declines to wish
         alert("You made me cry 😭😭");
      }
   }, 8000); // 8000 milliseconds = 8 seconds
} else {
   // Display general message if not birthday or for the rest of the year
   if (current.getDate() >= 2 && current.getMonth() >= 8) {
      // Between September 2nd and end of the year
      document.getElementById("birthday").innerText = `I'm Biswajit Mishra, ${current.getFullYear() - 2003}-year-old tech enthusiast.`;
   } else {
      // Outside September and October or before September 2nd
      document.getElementById("birthday").innerText = `I'm Biswajit Mishra, ${current.getFullYear() - 2004}-year-old tech enthusiast.`;
   }
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