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
  todoCount.count.innerHTML = uncompletedTodos;
}

updateCounters();
