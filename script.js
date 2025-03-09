let timer;
let time = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const alarmSound = document.getElementById('alarm-sound');

document.getElementById('start-btn').onclick = () => {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
    }
};

document.getElementById('pause-btn').onclick = () => {
    clearInterval(timer);
    isRunning = false;
};

document.getElementById('reset-btn').onclick = () => {
    clearInterval(timer);
    time = 0;
    updateDisplay(time);
    isRunning = false;
};

document.getElementById('stop-btn').onclick = () => {
    clearInterval(timer);
    time = 0;
    updateDisplay(time);
    isRunning = false;
};

document.getElementById('pomodoro-btn').onclick = () => setTimer(25 * 60);
document.getElementById('short-break-btn').onclick = () => setTimer(5 * 60);
document.getElementById('long-break-btn').onclick = () => setTimer(15 * 60);

function setTimer(seconds) {
    clearInterval(timer);
    time = seconds;
    updateDisplay(time);
    isRunning = false;
}

function updateTimer() {
    if (time > 0) {
        time--;
        updateDisplay(time);
    } else {
        clearInterval(timer);
        alarmSound.play();
    }
}

function updateDisplay(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
