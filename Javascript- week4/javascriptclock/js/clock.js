let myName = prompt("Lütfen isminizi giriniz: ")

let myNameDOM = document.querySelector('#myName')
let clockDom = document.querySelector('#myClock')
myNameDOM.innerHTML = myName


function showTime() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDay()

    let daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma","Cumartesi"]
    let dayName = daysOfWeek[day]

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    setTimeout(showTime, 1000);

    clockDom.innerHTML = `${hours} : ${minutes} : ${seconds} - ${dayName}`
}

showTime();