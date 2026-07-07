const bookingForm = document.querySelector("#booking-form");
const bookingSummary = document.querySelector("#booking-summary");
const clearBookingButton = document.querySelector("#clear-booking");

const savedBooking = localStorage.getItem("latestBooking");

if (savedBooking) {
  bookingSummary.textContent = savedBooking;
}

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const guestName = bookingForm.guestName.value;
  const roomChoice = bookingForm.roomChoice.value;
  const checkIn = bookingForm.checkIn.value;
  const checkOut = bookingForm.checkOut.value;

  if (checkOut <= checkIn) {
    bookingSummary.textContent = "Please choose a check-out date after the check-in date.";
    return;
  }

  const confirmationMessage = `${guestName}, your ${roomChoice} is reserved from ${checkIn} to ${checkOut}.`;
  bookingSummary.textContent = confirmationMessage;
  localStorage.setItem("latestBooking", confirmationMessage);
});

clearBookingButton.addEventListener("click", function () {
  localStorage.removeItem("latestBooking");
  bookingSummary.textContent = "";
});
