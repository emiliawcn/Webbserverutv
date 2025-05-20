
document.addEventListener("DOMContentLoaded", function() {
    console.log("Countrymusiksidan är laddad!");
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Förhindrar att formuläret skickas direkt

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "password123") {
        alert("Inloggning lyckades! Välkommen.");
        window.location.href = "index.html"; // Gå till startsidan
    } else {
        errorMessage.innerText = "Fel användarnamn eller lösenord!";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".enter-button").style.opacity = "1";
        document.querySelector(".country-quote").style.opacity = "1";
    }, 500);
});
