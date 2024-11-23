const addTaskButton = document.querySelector("#addTask");

addTaskButton.addEventListener("click", () => {
    const userInput = document.querySelector("#taskInput").value;

    if (userInput === "") {
        alert("Field cannot be empty! 😠");
    } else {
        const taskArea = document.querySelector("#taskArea");
        
        // Remove "No tasks added yet." text if present
        const placeholder = taskArea.querySelector("p");
        if (placeholder) placeholder.remove();

        // Adding of new task
        taskArea.innerHTML += `
            <div class="task-item d-flex align-items-center">
                <button class="btn btn-mark me-2">☑️</button>
                <span>${userInput}</span>
                <button class="btn btn-sm btn-delete ms-auto">Remove</button>
            </div>
            <hr>
        `;
        document.querySelector("#taskInput").value = "";

        // Marking as Complete functionality
        const markButtons = document.querySelectorAll(".btn-mark");
        markButtons.forEach((markButton) => {
            markButton.addEventListener("click", (e) => {
                const taskText = e.target.nextElementSibling;
                taskText.style = "text-decoration: line-through; color: #7c7c9f";
                e.target.remove();
            });
        });

        // Delete functionality
        const deleteButtons = document.querySelectorAll(".btn-delete");
        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener("click", (e) => {
                e.target.parentElement.remove();
            });
        });
    }
});
