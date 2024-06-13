const start_button = document.querySelector(".start_button");
const stop_button = document.querySelector(".stop_button");
const restart_button = document.querySelector(".restart_button");
const pause_button = document.querySelector(".pause_button");
const play_button = document.querySelector(".play_button");

const pomodoro_interval = document.querySelector(".pomodoro-interval");
const long_break_interval = document.querySelector(".long-break-interval");
const short_break_interval = document.querySelector(".short-break-interval");

let minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let timerInterval;
const pomodoroCount = [];

function startTimer(secondsInAMinute, currentTimerLength, timerMinutesPlaceholderValue, secondsPlaceHolderValue){
    minutes.textContent = currentTimerLength
    seconds.textContent = secondsInAMinute;
    minutes.textContent--
    timerInterval = setInterval(()=>{
        seconds.textContent--

        if(seconds.textContent === '0'){
            minutes.textContent -= '1';
            seconds.textContent = secondsInAMinute;
        }
        
        if(minutes.textContent < 0){
            minutes.textContent = timerMinutesPlaceholderValue;
            seconds.textContent = '00'
            pomodoroCount.push(1)
            clearInterval(timerInterval);
        }
    },1000)
}


function stopTimer(){
    minutes.textContent = '25';
    seconds.textContent = '00'
    clearInterval(timerInterval);
}


function restartTimer(){
    clearInterval(timerInterval);
    minutes.textContent = '25';
    seconds.textContent = '00'
    setTimeout(()=>{
    seconds.textContent = '59'
    minutes.textContent--
    timerInterval = setInterval(()=>{
        seconds.textContent--

        if(seconds.textContent === '0'){
            minutes.textContent -= '1';
            seconds.textContent = '59';
        }
        
        if(minutes.textContent < 0){
            minutes.textContent = '25';
            seconds.textContent = '00'
            clearInterval(timerInterval);
        }
    },1000)
    },1000)
}


function pauseTimer(){
    minutes.textContent = minutes.textContent;
    seconds.textContent = seconds.textContent;
    clearInterval(timerInterval)
}

function playTimer(){
    timerInterval = setInterval(()=>{
        seconds.textContent--

        if(seconds.textContent === '0'){
            minutes.textContent -= '1';
            seconds.textContent = '59';
        }
        
        if(minutes.textContent < 0){
            minutes.textContent = '25';
            seconds.textContent = '00'
            clearInterval(timerInterval);
        }
    },1000)
}


start_button.addEventListener("click", ()=>{
    startTimer('59','25', '25', '00')
    start_button.style.display = "none";
    stop_button.style.display = "block";
    restart_button.style.display = "block";
    pause_button.style.display = "block"
})

stop_button.addEventListener("click", ()=>{
    stopTimer();
    start_button.style.display = "block";
    stop_button.style.display = "none";
    restart_button.style.display = "none";
    pause_button.style.display = "none";
    play_button.style.display = "none";
})

restart_button.addEventListener("click", ()=>{
    restartTimer();
})

pause_button.addEventListener("click", ()=>{
    pauseTimer();
    pause_button.style.display = "none";
    play_button.style.display = "block";
    restart_button.style.display = "none";
})

play_button.addEventListener("click",()=>{
    playTimer();
    pause_button.style.display = "block";
    play_button.style.display = "none";
    restart_button.style.display = "block";
})