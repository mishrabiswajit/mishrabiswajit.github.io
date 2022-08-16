// Birthday Function
setTimeout(function () {
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
      document.getElementById("birthday").innerHTML = "I am " + (current.getFullYear() - 2003) + " yrs old.";
    }
  }

  else {
    document.getElementById("birthday").innerHTML = "I am " + (current.getFullYear() - 2004) + " yrs old.";
  }
}, 0);

// Clock Function
function clock() {
  var current = new Date();
  document.getElementById("clock").innerHTML = current.toLocaleTimeString({ timeZone: 'Asia/Kolkata' });

  // Random Colour Generator
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("clock").style.color = "#" + randomColor;
}
setInterval(clock, 1000);