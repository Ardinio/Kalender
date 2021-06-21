function initTodos() {
    renderTodoList();
}

function renderTodoList() {
    const filterdTodos = filterTodoListBySelectedDate(state.todos)
    const sortedTodos = sortTodoListByDate(filterdTodos);
    const ul = fetchAndClearContainerElement();
    createAndAppendTodoElementToConatiner(sortedTodos, ul)
}

function createAndAppendTodoElementToConatiner(sortedTodos, ul) {
    for (const todo of sortedTodos) {
        const li = createTodoElement(todo);
        ul.append(li)
    }
}

function fetchAndClearContainerElement() {
    const ul = document.querySelector('ul');
    ul.innerText = "";
    return ul;
}

function filterTodoListBySelectedDate(todoList) {
    return todoList.filter((todo) =>
        !state.selectedDate || sameDay(todo.date, state.selectedDate))
}

function sortTodoListByDate(todoList) {
    return todoList.sort((a, b) => a.date < b.date ? -1 : 1);
}

function createTodoElement(todo) {
    const li = document.createElement('li');
    li.innerText = todo.text;
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.addEventListener('click', () => removeTodo(todo));
    li.append(button);
    return li;
}

function removeTodo(todo) {
    const index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
    renderTodoList();
}

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}