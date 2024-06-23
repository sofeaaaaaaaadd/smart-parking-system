// Function to show a specific page by its ID
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById(pageId).style.display = "block";
}

// Function to handle login
function login() {
  const userInput = document.getElementById("userInput").value;
  const password = document.getElementById("password").value;
  if (userInput && password) {
    alert("Logged in successfully");
    showPage("dashboard");
  } else {
    alert("Please fill in all fields");
  }
}

// Function to handle forgot password
function showForgotPassword() {
  const userInput = prompt("Enter your username/email:");
  if (userInput) {
    const newPassword = prompt("Enter your new password:");
    if (newPassword) {
      alert("Password updated successfully");
    }
  }
}

// Function to handle user registration
function register() {
  const regEmail = document.getElementById("regEmail").value;
  const regFullName = document.getElementById("regFullName").value;
  const regUsername = document.getElementById("regUsername").value;
  const regPassword = document.getElementById("regPassword").value;
  const regCarPlate = document.getElementById("regCarPlate").value;
  if (regEmail && regFullName && regUsername && regPassword && regCarPlate) {
    alert("Registration successful");
    showPage("home");
  } else {
    alert("Please fill in all fields");
  }
}

// Function to view bookings
function viewBooking() {
  alert("Viewing bookings");
}

// Function to cancel booking
function cancelBooking() {
  alert("Booking cancelled");
}

// Variable to store the selected parking spot
let selectedSpot = null;

// Function to select a parking spot
function selectSpot(spotNumber) {
  selectedSpot = spotNumber;
  alert(`Spot ${spotNumber} selected`);
}

// Function to confirm booking
function confirmBooking() {
  const parkingTime = document.getElementById("parkingTime").value;
  if (!parkingTime) {
    alert("Please enter parking time");
    return;
  }

  const now = new Date();
  const bookingTime = new Date();
  const [hours, minutes] = parkingTime.split(":");
  bookingTime.setHours(hours, minutes, 0);

  const timeDiff = (bookingTime - now) / (1000 * 60);
  if (timeDiff > 30) {
    document.getElementById("timeAlert").innerText =
      "Please book only if you are 30 minutes or less away from the parking time";
    return;
  }

  if (selectedSpot) {
    document.getElementById("selectedSpot").innerText = selectedSpot;
    document.getElementById("location").innerText = "A7 Parking";
    initMap(); // Initialize Leaflet map
    showPage("details");
  } else {
    alert("Please select a parking spot");
  }
}

// Function to initialize Leaflet map
function initMap() {
  const map = L.map("map").setView([3.139, 101.6869], 15); // Set view to Kuala Lumpur
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  const marker = L.marker([3.139, 101.6869]).addTo(map); // Add marker at Kuala Lumpur
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); // Add popup to marker
}

// Initially show the home page
showPage("home");
