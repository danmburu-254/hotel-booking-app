const bookingForm = document.querySelector("#booking-form");
const pricePreview = document.querySelector("#price-preview");
const bookingSummary = document.querySelector("#booking-summary");
const clearBookingButton = document.querySelector("#clear-booking");
const roomChoiceInput = document.querySelector("#room-choice");
const checkInInput = document.querySelector("#check-in");
const checkOutInput = document.querySelector("#check-out");
const currencyChoiceInput = document.querySelector("#currency-choice");

const roomPrices = {
  "Garden Room": 120,
  "Ocean Suite": 220,
  "Family Loft": 180,
};

const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
};

const currencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

function calculateBookingEstimate(roomChoice, checkIn, checkOut, currencyChoice) {
  const pricePerNight = roomPrices[roomChoice];
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const nights = (checkOutDate - checkInDate) / millisecondsPerDay;
  const totalPrice = nights * pricePerNight;
  const convertedTotal = totalPrice * currencyRates[currencyChoice];
  const currencySymbol = currencySymbols[currencyChoice];

  return {
    nights,
    convertedTotal,
    currencySymbol,
    currencyChoice,
  };
}

function updatePricePreview() {
  const roomChoice = roomChoiceInput.value;
  const checkIn = checkInInput.value;
  const checkOut = checkOutInput.value;
  const currencyChoice = currencyChoiceInput.value;

  if (!roomChoice || !checkIn || !checkOut || !currencyChoice) {
    pricePreview.textContent = "";
    return;
  }

  if (checkOut <= checkIn) {
    pricePreview.textContent = "Choose a check-out date after your check-in date to see the estimate.";
    return;
  }

  const estimate = calculateBookingEstimate(roomChoice, checkIn, checkOut, currencyChoice);

  pricePreview.textContent = `Live estimate: ${estimate.nights} night(s) in the ${roomChoice} will cost ${estimate.currencySymbol}${estimate.convertedTotal.toFixed(2)} ${estimate.currencyChoice}.`;
}

const savedBooking = localStorage.getItem("latestBooking");

if (savedBooking) {
  bookingSummary.textContent = savedBooking;
}

const pageParameters = new URLSearchParams(window.location.search);
const roomFromGallery = pageParameters.get("room");

if (roomFromGallery && roomPrices[roomFromGallery]) {
  roomChoiceInput.value = roomFromGallery;
}

roomChoiceInput.addEventListener("change", updatePricePreview);
checkInInput.addEventListener("input", updatePricePreview);
checkInInput.addEventListener("change", updatePricePreview);
checkOutInput.addEventListener("input", updatePricePreview);
checkOutInput.addEventListener("change", updatePricePreview);
currencyChoiceInput.addEventListener("change", updatePricePreview);
updatePricePreview();

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const guestName = bookingForm.guestName.value;
  const roomChoice = roomChoiceInput.value;
  const checkIn = checkInInput.value;
  const checkOut = checkOutInput.value;
  const currencyChoice = currencyChoiceInput.value;

  if (checkOut <= checkIn) {
    bookingSummary.textContent = `Check-out must be after check-in. You chose check-in ${checkIn} and check-out ${checkOut}.`;
    return;
  }

  const estimate = calculateBookingEstimate(roomChoice, checkIn, checkOut, currencyChoice);

  const confirmationMessage = `${guestName}, your ${roomChoice} is reserved for ${estimate.nights} night(s), from ${checkIn} to ${checkOut}. Estimated total: ${estimate.currencySymbol}${estimate.convertedTotal.toFixed(2)} ${estimate.currencyChoice}.`;
  bookingSummary.textContent = confirmationMessage;
  localStorage.setItem("latestBooking", confirmationMessage);
});

clearBookingButton.addEventListener("click", function () {
  localStorage.removeItem("latestBooking");
  bookingSummary.textContent = "";
});
