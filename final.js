
// This contains all about textbox
var Para = document.getElementById("para");
// var text = "The most common name in the world is Mohammed."
var text = "The tallest living man is 37-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue."
// console.log(Para);
const stop1 = document.getElementById("stop")

var character = text.split('').map((char) => {
    var span = document.createElement("span");
    span.innerText = char;
    Para.appendChild(span);
    return span;
})

let index = 0;
let spanCharacter = character[index];
// console.log(spanCharacter)
spanCharacter.classList.add('cursor');

document.addEventListener("keydown", ({ key }) => {
    console.log(key);
    if (key === spanCharacter.innerText) {
        spanCharacter.classList.remove('cursor');
        spanCharacter.classList.add('success');
        spanCharacter = character[++index];
        // spanCharacter.classList.remove('cursor');
    }
    else {

    }
}
)
// This contains all about timer
var tens = 00;
var seconds = 00;
var minute = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMinute = document.getElementById("minute");
var appendStart = document.getElementById("start");
var appendStop = document.getElementById("stop");
var appendReset = document.getElementById("reset");

function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + tens;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
        minute++;
        appendMinute.innerHTML = '0' + minute;
        seconds = 0;
        appendSeconds.innerHTML = '0' + seconds;
    }
    if (minute > 9) {
        appendMinute.innerHTML = minute;
    }
}
appendStart.addEventListener("click", function () {
    setTimeout(callinStart, 1000)
    function callinStart() {
        interval = setInterval(startTimer)
    }
})
appendStop.addEventListener("click", function () {
    clearInterval(interval);
})
appendReset.addEventListener("click", function () {
    clearInterval(interval);
    tens = 00;
    seconds = 00;
    minute = 00;
    appendTens.innerHTML = '0' + tens;
    appendSeconds.innerHTML = '0' + seconds;
    appendMinute.innerHTML = '0' + minute;
})
function pause(){
    stop1.style.opacity= "0"
    stop1.style.position= "absolute"
}