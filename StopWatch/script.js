let seconds = 0;
let tens = 0;
let mins = 0;

let getseconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let getMins = document.querySelector(".mins");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let interval;

btnStart.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});

btnReset.addEventListener("click", () => {
  clearInterval(interval);
  reset();
  tens = 0;
  seconds = 0;
  mins = 0;
  updateTimerDisplay();
});

function startTimer() {
  tens++;
  if (tens > 99) {
    seconds++;
    tens = 0;
    if (seconds > 59) {
      mins++;
      seconds = 0;
    }
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  getTens.innerHTML = tens < 10 ? "0" + tens : tens;
  getseconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  getMins.innerHTML = mins < 10 ? "0" + mins : mins;
}

function reset() {
  tens = 0;
  seconds = 0;
  mins = 0;
  updateTimerDisplay();
}

// Initial display update
updateTimerDisplay();
