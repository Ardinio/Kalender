function getTime() {
  return new Date().toLocaleTimeString();
}

function getWeekday() {
  let weekdayNumber = new Date().getUTCDay();

  switch (weekdayNumber) {
    case 0:
      return "Söndag";
    case 1:
      return "Måndag";
    case 2:
      return "Tisdag";
    case 3:
      return "Onsdag";
    case 4:
      return "Torsdag";
    case 5:
      return "Fredag";
    case 6:
      return "Lördag";
  }
}

function getDate() {
  return String(new Date().getUTCDate());
}

function getMonth() {
  let monthNumber = new Date().getUTCMonth();

  switch (monthNumber) {
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
  appendSingleElement(time, ".active-day-content-clock");
}

function displayDate() {
  let date =
    getWeekday() + ", " + getDate() + " " + getMonth() + " " + getYear();
  appendSingleElement(date, ".active-day-content-date");
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
