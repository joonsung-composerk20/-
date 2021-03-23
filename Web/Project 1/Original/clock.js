const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const dMin = date.getMinutes();
    const dHr = date.getHours();
    const dSec = date.getSeconds();

    clockTitle.innerText =  `${dHr < 10 ? `0${dHr}` : dHr}:${
        dMin < 10 ? `0${dMin}` : dMin
    }:${dSec < 10 ? `0${dSec}` : dSec}`;
}

function alarmTime() {
    const mondayClass1_hour = 8;
    const mondayClass1_minute = 50;
    if (Number(mondayClass1_hour)=Number(dHr)) {
        
    }
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();