let timer;
let minutesInput = document.getElementById("inputMinutes");
let timerDisplay = document.getElementById("timerDisplay");

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    timerDisplay.textContent = "00:00:00";
}

function restartTimer() {
    resetTimer();
    startTimer();
}

function setTimer() {
    let minutes = parseInt(minutesInput.value, 10);
    if (!isNaN(minutes) && minutes > 0) {
        let seconds = minutes * 60;
        displayTime(seconds);
        minutesInput.value = "";
        stopTimer();
    } else {
        alert("Please enter a valid positive number for minutes.");
    }
}

function updateTimer() {
    let currentTime = timerDisplay.textContent.split(":");
    let totalSeconds = parseInt(currentTime[0]) * 3600 + parseInt(currentTime[1]) * 60 + parseInt(currentTime[2]);

    if (totalSeconds > 0) {
        totalSeconds--;
        displayTime(totalSeconds);
    } else {
        stopTimer();
    }
}

function displayTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    hours = padTime(hours);
    minutes = padTime(minutes);
    remainingSeconds = padTime(remainingSeconds);

    timerDisplay.textContent = hours + ":" + minutes + ":" + remainingSeconds;
}

function padTime(time) {
    return time < 10 ? "0" + time : time;
}
