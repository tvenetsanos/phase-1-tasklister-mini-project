document.addEventListener("DOMContentLoaded", () => {
}); 

const newTaskDescription = document.getElementById("create-task-form")
console.log(newTaskDescription)
newTaskDescription.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = document.getElementById("tasks")
  const newTask = document.createElement("li")
  console.log(event)
newTask.innerText = event.target[0].value;
  task.appendChild(newTask)
});

