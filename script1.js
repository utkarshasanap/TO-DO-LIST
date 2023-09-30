document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add a new task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="deleteTask">Delete</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = "";

        // Attach event listener to the delete button
        const deleteButton = listItem.querySelector(".deleteTask");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
    });
});
