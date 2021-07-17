var hours = 0;
var mins = 0;
var seconds = 0;
var tens = 0;
hoursHead = document.getElementById("hours");
minsHead = document.getElementById("mins");
secondsHead = document.getElementById("seconds");
tensHead = document.getElementById("tens");
var interval;
var startBtn;
var lapBtn;
startBtn = document.getElementById("startBtn");
lapBtn = document.getElementById("lapBtn");


function timer(){
    tens++;
   tensHead.innerHTML = tens;
   if(tens >= 100){
       seconds++;
       secondsHead.innerHTML = seconds;
       tens = 0;
   }
   else if (seconds >= 60){
       mins++;
       minsHead.innerHTML = mins;
       seconds = 0;
   }
   else if (mins >= 60){
       hours++;
       hoursHead.innerHTML = hours;
       mins = 0;
   }

}
function start(){
    interval = setInterval(timer,10);
    startBtn.disabled = true;
   
}

function stop(){
    clearInterval(interval);
   startBtn.disabled = false;
  
  
}

function reset(){
  hours = 0;
  mins = 0;
  seconds = 0;
  tens = 0;
  hoursHead.innerHTML = hours;
  minsHead.innerHTML = mins;
  secondsHead.innerHTML = seconds;
  tensHead.innerHTML = tens;
  stop();
  startBtn.disabled = false;
  
}
function laptimer(){
    var laps = document.getElementById("lap")
        laps.innerHTML +=  "<li> "
         + hoursHead.innerHTML +
         ": " + minsHead.innerHTML + ": " +
          secondsHead.innerHTML + ": " +
          tensHead.innerHTML +
       " "  + "</li>";
    
}
function clearLaps(){
    var laps = document.getElementById("lap")
    laps.innerHTML = "";
}