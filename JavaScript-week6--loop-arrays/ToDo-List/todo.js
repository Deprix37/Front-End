let buttonDOM = document.querySelector("#liveToastBtn");
buttonDOM.addEventListener("click", formHandler);
let ulDOM = document.querySelector("#list");
let successDOM = document.querySelector("#successToast");
let errorDOM = document.querySelector("#errorToast");

document.addEventListener("DOMContentLoaded", loadTasks);

function formHandler(event) {
    event.preventDefault();
    const TASK = document.querySelector("#task");
    if(TASK.value.trim() !== ""){
        addItem(TASK.value);
        saveTaskToLocalStorage(TASK.value);
        TASK.value = "";
        showToast(successDOM);

    } else {
        showToast(errorDOM);
    }
}

function showToast(e) {
    e.classList.remove("hide");
    e.classList.add("show");


    setTimeout(function() {
        e.classList.remove("show");
        e.classList.add("hide");
    }, 3000);
  }

ulDOM.addEventListener("click", function(event) {
    if (event.target.classList.contains("close")) {
      removeItem(event);
      removeFromLocalStorage(event.target.parentElement);
    }
  });

  ulDOM.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  });

const addItem = (task) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${task}` + `<span class="close">×</span>`;
    ulDOM.append(liDOM);
}

  function removeItem(event) {
    event.target.parentElement.remove();
  }

  function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function removeFromLocalStorage(taskElement) {
    let tasks = getTasksFromLocalStorage();
    let taskText = taskElement.firstChild.textContent;
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

  function loadTasks() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addItem(task));
}
