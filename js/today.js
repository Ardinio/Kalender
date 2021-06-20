
function getDateTime() {
    return new Date().toLocaleString();
}

function createDateTimeElement(dateTime) {

    let todayElement = document.querySelector(".active-day-content");
    todayElement.innerHTML = "";
    todayElement.append(dateTime);
}

function displayDateTime() {
    let changableTime = getDateTime();
    createDateTimeElement(changableTime);
}

function updateDateTime() {
    displayDateTime();
    setInterval(displayDateTime, 1000);
}

function sayHello() {
    let todayElement = document.querySelector(".day-active");
    todayElement.append("Hello");
}

