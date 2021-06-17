
function getDateTime() {
    return new Date().toLocaleString();
}

function createDateTimeElement(dateTime) {
    let todayElement = document.querySelector(".active-day-event-content");
    todayElement.append(dateTime);
}

function displayDateTime() {
    let changableTime = getDateTime();
    createDateTimeElement(changableTime);
}