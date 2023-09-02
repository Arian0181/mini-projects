const taskList = document.getElementById("task-list");

function saveTasksToLocal() {
    const tasks = Array.from(taskList.querySelectorAll(".task input[type='text']")).map(taskInput => taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocal() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Create task items based on loaded tasks
    tasks.forEach(taskText => {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <input type="text" value="${taskText}" readOnly>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Load tasks from local storage when the page loads
loadTasksFromLocal();

function createTask() {
    const newTaskText = document.getElementById("new-task").value;
    if (newTaskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <input type="text" value="${newTaskText}" readOnly>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        document.getElementById("new-task").value = "";

        saveTasksToLocal();
    }
}

function editTask(editButton) {
    const taskItem = editButton.parentNode;
    const taskText = taskItem.querySelector("input[type='text']");
    const isEditing = taskText.hasAttribute("readOnly");

    if (isEditing) {
        taskText.removeAttribute("readOnly");
        editButton.textContent = "Save";
    } else {
        taskText.setAttribute("readOnly", true);
        editButton.textContent = "Edit";

        saveTasksToLocal();
    }
}

function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentNode;
    taskList.removeChild(taskItem);

    saveTasksToLocal();
}