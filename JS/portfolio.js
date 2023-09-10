// Birthday Function
setTimeout(() => {
   var current = new Date();

   if (current.getDate() >= 2 && current.getMonth() >= 8) {
      if (current.getDate() == 2 && current.getMonth() == 8) {
         document.getElementById("birthday").innerText = "Today is my 🎂 Birthday 🎂 and I am " + (current.getFullYear() - 2003) + " yrs old now.";

         //Wish Function
         setTimeout(function () {
            var wish = confirm("Wanna Wish me ?");
            if (wish) {
               window.location.href = "https://t.me/mishrabiswajit";
            }
            else {
               alert("You made me cry 😭😭");
            }
         }, 16000);
      }
      else {
         document.getElementById("birthday").innerText = "I am " + (current.getFullYear() - 2003) + " yrs old.";
      }
   }

   else {
      document.getElementById("birthday").innerText = "I am " + (current.getFullYear() - 2004) + " yrs old.";
   }
}, 0);

// Clock Function
setInterval(() => {
   // Time Variables
   var local_time = new Date(); // Getting the local time
   var india_time = new Date(local_time.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })); // Getting the indian time
   var hours = india_time.getHours();
   var minutes = india_time.getMinutes();
   var seconds = india_time.getSeconds();
   var AM_PM = "AM";

   // Greet Function
   if (3 <= hours && hours < 12 && AM_PM == "AM") {
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
}, 1000);