window.addEventListener("load", main);

function main() {
  runFunctionAtInterval(displayTime, 1000);
  runFunctionAtInterval(displayDate, 86400000);
  initTodos();
}

function hasMobileWidth() {
  return window.matchMedia("(max-width: 576px)").matches;
}

const state = {
  todos: [
    
  ],
  selectedDate: undefined,
};

const isMobile = hasMobileWidth();
