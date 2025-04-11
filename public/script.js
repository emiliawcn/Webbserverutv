// Datum och tid
function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);

// Bildspel
const images = ["kitty cat.jpg", "kitty cat 2.avif", "kitty cat 3.jpg"];
let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("slideshow").src = images[index];
}
setInterval(changeImage, 3000);

// Kalender
document.getElementById("todayDate").innerText = new Date().toDateString();
