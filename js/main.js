window.addEventListener('load', main);

function main() {
    runFunctionAtInterval(displayTime, 1000);
    runFunctionAtInterval(displayDate, (86400000));
}