let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let amPmElem = document.getElementById("am");

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let amPm = "AM";
        if(hours > 11){
        amPm = "PM";
        if(hours > 12){
            hours = hours - 12;
        }
    }
    hrs.innerHTML = hours;
    min.innerHTML = (currentTime.getMinutes()<10?'0':"") +  currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?'0':"") +  currentTime.getSeconds();
    amPmElem.innerHTML = amPm;
},1000)
 

