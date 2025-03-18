document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("form");
  let tasklist = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let inputField = document.getElementById("new-task-description");
    let taskText = inputField.value.trim();

    if (taskText !== "") {
      let taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      tasklist.appendChild(taskItem);
      inputField.value = "";
    }
  });
});
