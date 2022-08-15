function clock() {
  let current = new Date();
  document.getElementById("clock").innerHTML = current.toLocaleTimeString({ timeZone: 'Asia/Kolkata' });
}
setInterval(clock, 1000);