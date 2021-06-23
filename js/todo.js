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
    if (!isMobile) updateTodoNumber(calendarDayElement);
}

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

//----------------------------------------------------------------


function listenToClicks() {
    if (isMobile) {
        let button = document.querySelector(".Evenemang");
        button.addEventListener("click", handleClicks);
    }
    else {
        let calendar = document.querySelectorAll(".dateNr");
        for (let i = 0; i < calendar.length; i++) {
            calendar[i].addEventListener("click", handleClicks);
        }

        let image = document.querySelectorAll(".dateNr.buttonImg");
        for (let j = 0; j < image.length; j++) {
            image[j].addEventListener("click", handleClicks);
        }
    }
}

function handleClicks(event) {
    let clickedElement = event.target;

    if (event.target.className == "Evenemang") {
        addTodo(clickedElement);
    }
    else if (event.target.className == "dateNr") {
        setSelectedDate(clickedElement);
    }
    else if (event.target.className == "buttonImg") {
        clickedElement = event.target.parentNode;
        setSelectedDate(clickedElement);
        addTodo(clickedElement);
    }
}

function setSelectedDate(calendarDateElement) {
    state.selectedDate = getCalendarDate(calendarDateElement);
    renderTodoList();
}

function addTodo(calendarDateElement) {
    let todoMessage, todoDate, newTodo;

    if (isMobile) todoDate = createNewTodoDate();
    else todoDate = state.selectedDate;
    if (todoDate === undefined || todoMessage === null || todoDate.length == 0) return;

    todoMessage = createNewTodoMessage();
    if (todoMessage === undefined || todoMessage === null || todoMessage.length == 0) return;

    newTodo = createNewTodo(todoMessage, todoDate);

    state.todos.push(newTodo);
    if (!isMobile) updateTodoNumber(calendarDateElement);
    else updateTodoNumber(findCalendarDateElement(newTodo.date));

    renderTodoList();
}

function getCalendarDate(calendarDateElement) {
    let dateString = calendarDateElement.querySelector("time").dateTime;
    let dateArray = dateString.split("-");
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
}

function createNewTodo(todoMessage, todoDate) {
    return { text: todoMessage, date: todoDate };
}

function createNewTodoMessage() {
    let todoMessage = prompt("Please enter item to do.", "");
    return todoMessage;
}

function createNewTodoDate() {
    let todoDate = prompt("Please enter date for Todo item.", "yyyy-mm-dd");
    if (todoDate === null) return;

    let dateArray = todoDate.split("-");
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]); //Saknar felhantering
}

function updateTodoNumber(calendarDateElement) {
    let numOfTodos = filterTodoListBySelectedDate(state.todos).length;
    calendarDateElement.querySelector(".amountOfToDos").innerText = numOfTodos;
}

function findCalendarDateElement(date) {
    let elements = document.querySelectorAll(".dateNr");
    let elementsArray = Array.from(elements.values());

    return elementsArray[date.getDate() - 1];
}