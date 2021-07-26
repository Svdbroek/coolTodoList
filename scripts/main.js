function updateCounters() {
  // declare a variable that contains the "Total" counter element

  const totalCount = document.getElementById("total-count");
  // declare a variable that contains the number of todos,
  const totalTodosArray = document.getElementsByClassName("todo");
  // by counting how many elements have a specific classname / attribute
  const totalTodos = totalTodosArray.length;
  // update the HTML inside the counter element with the number of todos
  totalCount.innerHTML = totalTodos;

  const completedCount = document.getElementById("completed-count");
  const completedTodosArray = document.getElementsByClassName("completed");
  const totalCompleted = completedTodosArray.length;
  completedCount.innerHTML = totalCompleted;

  const todoCount = document.getElementById("todo-count");
  const uncompletedTodos = totalTodos - totalCompleted;
  todoCount.innerHTML = uncompletedTodos;
}

function toggleDone(event) {
  // get the checkbox from the event object
  const checkbox = event.target;

  if (checkbox.checked) {
    checkbox.parentElement.parentElement.className = "todo completed";
    // change the checkbox so that it shows up as completed
  } else {
    checkbox.parentElement.parentElement.className = "todo";
    // change the checkbox so that it shows up as todo
  }

  // update the counters, now that we have updated the checkbox
  updateCounters();
}

// add a "change" event listener to every checkbox,

// and use the "toggleDone" function as the callback

const checkboxes = document.querySelectorAll(".todo input");

for (let i = 0; i < checkboxes.length; i++) {
  const checkbox = checkboxes[i];
  checkbox.addEventListener("change", toggleDone);
}

updateCounters();
