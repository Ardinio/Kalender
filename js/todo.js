/** Entry point for our todo code */
function initTodos() {
    renderTodoList();
    listenToClicks();
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

    let calendarDayElement = findCalendarDateElement(todo.date);
    if (!isMobileDevice) updateTodoNumber(calendarDayElement);
}

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

//----------------------------------------------------------------


function listenToClicks() {
    if (isMobileDevice) {
        let button = document.querySelector(".Evenemang");
        button.addEventListener("click", addTodo);
    }
    else {
        let calendar = document.querySelector(".date-grid");
        calendar.addEventListener("click", setSelectedDate);
        calendar.addEventListener("click", addTodo);
    }
}

function setSelectedDate(event) {
    state.selectedDate = getCalendarDate(event.target);
}

function addTodo(event) {
    let buttonClass = getButtonClass();
    // if (event.target.className !== buttonClass) return;

    let todoMessage;
    let todoDate;
    let newTodo;

    if (isMobileDevice) todoDate = createNewTodoDate();
    else todoDate = state.selectedDate;
    if (todoDate !== undefined) todoMessage = createNewTodoMessage();
    newTodo = createNewTodo(todoMessage, todoDate);

    if (newTodo !== undefined) state.todos.push(newTodo);
    if (!isMobileDevice) updateTodoNumber(event.target);
    renderTodoList();
}

function getCalendarDate(calendarDayElement) {
    let dateString = calendarDayElement.querySelector("time").dateTime;
    let dateArray = dateString.split("-");
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
}

function createNewTodo(todoMessage, todoDate) {
    return { text: todoMessage, date: todoDate };
}

function createNewTodoMessage() {
    let todoMessage = prompt("Please enter item to do.", "");
    if (todoMessage !== null && todoMessage != "") {
        return todoMessage;
    }
}

function createNewTodoDate() {
    let todoDate = prompt("Please enter date for Todo item.", "yyyy-mm-dd");
    let dateArray;
    if (todoDate !== null && todoDate != "") {
        dateArray = todoDate.split("-");
        return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]); //Saknar felhantering
    }
}

function updateTodoNumber(calendarDayElement) {
    let numOfTodos = filterTodoListBySelectedDate(state.todos).length;
    calendarDayElement.querySelector(".amountOfToDos").innerText = numOfTodos;
}

function findCalendarDateElement(date) {
    let elements = document.querySelectorAll(".dateNr");
    let elementsArray = Array.from(elements.values());

    return elementsArray[date.getDate() - 1];
}

function getButtonClass() {
    if (isMobileDevice) return "Evenemang";
    else return "dateNr";
}