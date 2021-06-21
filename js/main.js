window.addEventListener('load', main);

function main() {
    runFunctionAtInterval(displayTime, 1000);
    runFunctionAtInterval(displayDate, (86400000));
    initTodos()
}

const state = {
    todos: [{
        text: 'Ska jobba med skola',
        date: new Date('2021.06-17')
    }, {
        text: 'Lorem ipsum dolor elit.',
        date: new Date('2021-06-20')
    }, {
        text: 'Lorem ipsum adipisicing elit.',
        date: new Date('2021-06-03')
    }],
    selectedDate: undefined
}
