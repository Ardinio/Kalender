window.addEventListener('load', main);

const state = {
    todos: [{
        text: '',
        date: new Date('')
    }],
    selectedDate: undefined
}

function main() {
    // loadTodosFromLS
    initTodos()
}