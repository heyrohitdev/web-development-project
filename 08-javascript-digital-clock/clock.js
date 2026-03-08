let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new Date();

let Day = Days[d.getDay()]
let D = d.getDate();
let M = Months[d.getMonth()]
let Y = d.getFullYear();

document.getElementById('date').innerHTML = Day + "," + D + "-" + M + "-" + Y

function updateClock() {

    let t = new Date();

    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;

}

setInterval(updateClock, 1000);

let dark = document.getElementById('dark');
let light = document.getElementById('light');
let time = document.getElementById('time');
let date = document.getElementById('date');

dark.addEventListener('click', function () {

    document.body.style.background = "black";

    time.style.color = "white";
    date.style.color = "white";
})
light.addEventListener('click', function () {

    document.body.style.background = "white";

    time.style.color = "black";
    date.style.color = "black";
})