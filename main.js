var taskInput = document.querySelector('#specific-task-item');
var taskOutput = document.querySelector('#show-task-item');
var addTaskButton = document.querySelector(".make-task")

addTaskButton.addEventListener('click', addTask);

function addTask() {
  taskOutput.innerText = taskInput.value;
}
