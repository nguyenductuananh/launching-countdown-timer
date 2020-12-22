const days = document.getElementsByClassName('days')[0];
const hours = document.getElementsByClassName('hours')[0];
const minutes = document.getElementsByClassName('minutes')[0];
const seconds = document.getElementsByClassName('seconds')[0];

let date = new Date();
let newYear = new Date("12/31/" + date.getFullYear());
const MILISECOND_PER_DAY = 86400000;
const MILISECOND_PER_HOUR = 3600000;
const MILISECOND_PER_MINUTE = 60000;
const MILISECOND_PER_SECOND = 1000;
let long = newYear.getTime() - date.getTime();

let day = parseInt(long /MILISECOND_PER_DAY);
long -= day * MILISECOND_PER_DAY;
let hour = parseInt(long / MILISECOND_PER_HOUR);
long -= hour * MILISECOND_PER_HOUR;
let minute = parseInt(long / MILISECOND_PER_MINUTE);
long -= minute * MILISECOND_PER_MINUTE;
let second = parseInt(long / MILISECOND_PER_SECOND);
long -= second * MILISECOND_PER_SECOND;
setInterval(function(){
    days.textContent = day;
    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
    if(--second === -1){
        second = 59;
        minute--;
    }
    if(minute - 1 === -1){
        minute = 59;
        hour--;
    }
    if(hour - 1 === -1){
        hour = 23;
        day--;
    }

}, 1000);


