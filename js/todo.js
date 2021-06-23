/** Entry point for our todo code */
function initTodos() {
    renderTodoList();
    listenToCalendarClicks();
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
    button.classList.add("removeBtn"); 
    button.innerHTML = '<img src="images/icons/removeicon.png" />';
    button.addEventListener('click', () => removeTodo(todo));
    li.append(button);
    return li;
}

function removeTodo(todo) {
    const index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
    renderTodoList();
    updateTodoNumber(); //Måste hitta rätt calendarelement för viss todo item.
}

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

//----------------------------------------------------------------


function listenToCalendarClicks() {
    let calendar = document.querySelector(".date-grid");
    calendar.addEventListener("click", setSelectedDate);
    calendar.addEventListener("click", addTodo);
}

function setSelectedDate(event) {
    state.selectedDate = getCalendarDate(event.target);
}

function addTodo(event) {
    if (event.target.className == "dateNr") {
        let newTodo = createNewTodo(state.selectedDate);
        if (newTodo !== undefined) {
            state.todos.push(newTodo);
            updateTodoNumber(event.target);
        }
        renderTodoList();
    }
}

function getCalendarDate(calendarDayElement) {
    let dateString = calendarDayElement.querySelector("time").dateTime;
    let dateArray = dateString.split("-");
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
}

function createNewTodo(todoDate) {
    let todoMessage = prompt("Please enter item to do.", "");
    if (todoMessage !== null && todoMessage != "") {
        return { text: todoMessage, date: todoDate };
    }
}

function updateTodoNumber(calendarDayElement) {
    let numOfTodos = filterTodoListBySelectedDate(state.todos).length;
    calendarDayElement.querySelector(".amountOfToDos").innerText = numOfTodos;
}
