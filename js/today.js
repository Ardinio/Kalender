function getTime() {
    return new Date().toLocaleTimeString();
}

function getWeekday() {
    let weekdayNumber = new Date().getUTCDay();

    switch(weekdayNumber) {
        case 0:
            return "Måndag";
        case 1:
            return "Tisdag";
        case 2:
            return "Onsdag";
        case 3:
            return "Torsdag";
        case 4:
            return "Fredag";
        case 5:
            return "Lördag";
        case 6:
            return "Söndag";
    }
}

function getDate() {
    return String(new Date().getUTCDate());
}

function getMonth(){
    let monthNumber = new Date().getUTCMonth();

    switch(monthNumber) {
        case 0:
            return "januari";
        case 1:
            return "februari";
        case 2:
            return "mars";
        case 3:
            return "april";
        case 4:
            return "maj";
        case 5:
            return "juni";
        case 6:
            return "juli";
        case 7:
            return "augusti";
        case 8:
            return "september";
        case 9:
            return "oktober";
        case 10:
            return "november";
        case 11:
            return "december";
    }
}

function getYear() {
    return String(new Date().getUTCFullYear());
}

function displayTime() {
    let time = getTime();
    appendSingleElement(time, ".active-day-content")
}

function displayDate() {
    let date = getWeekday() + ", " + getDate() + " " + getMonth() + " " + getYear();
    appendSingleElement(date, ".day-active")
}


function runFunctionAtInterval(functionName, milliseconds) {
    functionName();
    setInterval(functionName, milliseconds);
}

function appendSingleElement(elementToAppend, parentSelector) {

    let parentElement = document.querySelector(parentSelector);
    parentElement.innerHTML = "";
    parentElement.append(elementToAppend);
}