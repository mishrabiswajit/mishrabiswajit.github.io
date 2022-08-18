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
      }, 5000);
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
  if (3 <= hours < 12) {
    document.getElementById("greet").innerText = " Good Morning !!\n\n";
  }
  if (12 <= hours <= 16) {
    document.getElementById("greet").innerText = " Good Afternoon !!\n\n";
  }

  // AM/PM Converter
  if (hours >= 12) {
    AM_PM = "PM";
    hours -= 12;
  }

  // Zero inserter
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Final String
  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${AM_PM}`;

  // Random Colour Generator
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("clock").style.color = "#" + randomColor;
}, 1000);