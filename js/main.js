window.addEventListener('load', main);

function main() {
    runFunctionAtInterval(displayTime, 1000);
    runFunctionAtInterval(displayDate, (86400000));
    initTodos()
}

function hasMobileWidth() {
    return window.matchMedia('(max-width: 576px)').matches;
}

const state = {
    todos: [{
        text: 'Ska jobba med skola',
        date: new Date(2021, 06, 05)
    }, {
        text: 'Lorem ipsum dolor elit.',
        date: new Date(2021, 06, 01)
    }, {
        text: 'Lorem ipsum adipisicing elit.',
        date: new Date(2021, 06, 21)
    }],
    selectedDate: undefined
}

const isMobile = hasMobileWidth();
