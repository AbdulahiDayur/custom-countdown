const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countDownEl = document.getElementById('countdown');
const countDownElTitle = document.getElementById('countdown-title');
const countDownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 12;

const today = new Date().toISOString().slice(0,10);
dateEl.setAttribute('min', today);

// Populate Countdown / Complete UI
function updateDOM() {
  countdownActive = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log('distance', distance);

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  console.log(days, hours, minutes, seconds);

  // Populate Countdown
  countDownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  // Hide Input
  inputContainer.hidden = true;
  // Show Countdown
  countDownEl.hidden = false
  });
}


// Takes Values From Form Input
function updateCountDown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value
  countdownDate = e.srcElement[1].value
  console.log(e.srcElement[0].value, e.srcElement[1].value);

  // Get number version of current Date, updateDOM
  countdownValue = new Date(countdownDate).getTime();
  console.log(`countdown value: ${countdownValue}`);
  updateDOM()
}

countdownForm.addEventListener("submit", updateCountDown);