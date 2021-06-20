function getTime() {
    return new Date().toLocaleTimeString();
}

function getDate() {
    return new Date().toLocaleDateString();
}

function displayTime() {
    let time = getTime();
    appendSingleElement(time, ".active-day-event-content")
}

function displayDate() {
    let date = getDate();
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