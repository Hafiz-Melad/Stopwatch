let timerDisplay = document.querySelector(".timer");
let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;

let timerId = null;

startBtn.addEventListener("click", function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timerId);
});

resetBtn.addEventListener("click", function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secsstring = secs < 10 ? `0${secs}` : secs;
    let minsstring = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;
}
