/** @format */

const time_html = document.querySelector("#time");
const goal = document.querySelector("#goal").innerHTML;
let time = 0;

setInterval(() => {
    time += 1;
    time_html.innerHTML = time;
    console.log((time / goal) * 100);
    document.documentElement.style.setProperty("--time", `${(time / goal) * 100}%`);
}, 60000);
