const hr = document.querySelector(".hour");
const mn = document.querySelector(".min");
const sc = document.querySelector(".sec");

function getClock () {
    const date = new Date();
    const hour = date.getHours() * 30;
    const minute = date.getMinutes() * 6;
    const second = date.getSeconds() * 6;

    // console.log(hour);
    // console.log(minute);
    // console.log(second);

    hr.style.transform = `rotateZ(${hour}deg)`;
    mn.style.transform = `rotateZ(${minute}deg)`;
    sc.style.transform = `rotateZ(${second}deg)`;
}

getClock();
setInterval(getClock,1000);
