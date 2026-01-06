const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const warningMsg = document.getElementById('warningMsg');
const eventClosed = document.getElementById('eventClosed');
const warningAudio = document.getElementById('warningAudio');

const TWO_HOURS_SECONDS = 2 * 60 * 60; // 7200 seconds
const THIRTY_MINUTES_SECONDS = 30 * 60; // 1800 seconds

let timeLeft = TWO_HOURS_SECONDS;
let timerInterval = null;
let isRunning = false;
let warningTriggered = false;

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(timeLeft);

    // Warning Logic
    if (timeLeft <= THIRTY_MINUTES_SECONDS && timeLeft > 0) {
        if (!warningTriggered) {
            warningMsg.classList.add('warning-active');
            playWarningSound();
            warningTriggered = true;
        }
    } else {
        warningMsg.classList.remove('warning-active');
    }

    // B&W Warning Logic - Handled by CSS class 'warning-active' animation
    if (timeLeft <= THIRTY_MINUTES_SECONDS && timeLeft > 0) {
        if (!warningTriggered) {
            warningMsg.classList.add('warning-active');
            playWarningSound();
            warningTriggered = true;
        }
    } else {
        warningMsg.classList.remove('warning-active');
    }
}

function playWarningSound() {
    // Try to play the audio element
    if (warningAudio) {
        warningAudio.play().catch(e => {
            console.log("Audio play failed (user interaction needed or file missing):", e);
            // Fallback to a beep using AudioContext if file fails/missing
            playBeep();
        });
    }
}

function playBeep() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.type = 'sawtooth';
        oscillator.frequency.value = 440; // A4
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);

        oscillator.start();

        // Pulses
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);

        oscillator.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
        console.error("Audio Context failed", e);
    }
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    startBtn.textContent = 'Pause';
    startBtn.style.background = 'rgba(255,255,255,0.2)'; // Gray for pause
    startBtn.style.color = 'white';

    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            eventClosed.style.display = 'flex';
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startBtn.textContent = 'Resume';
    startBtn.style.background = 'white';
    startBtn.style.color = 'black';
}

function resetTimer() {
    pauseTimer(); // Stop if running
    timeLeft = TWO_HOURS_SECONDS;
    warningTriggered = false;
    startBtn.textContent = 'Start Timer';
    startBtn.style.background = 'white';
    startBtn.style.color = 'black';

    // Hide reset states
    warningMsg.classList.remove('warning-active');
    eventClosed.style.display = 'none';

    updateDisplay();
}

startBtn.addEventListener('click', () => {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);

// Initialize and Auto-Start
updateDisplay();
startTimer(); // Auto-start as requested
