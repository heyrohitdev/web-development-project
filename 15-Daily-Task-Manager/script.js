// ========================================
// 1. DOM ELEMENT SELECTION
// ========================================

// Main buttons
let addTaskBtn = document.getElementById("addTaskBtn");
let allTaskBtn = document.getElementById("allTaskBtn")
let activeBtn = document.getElementById("activeBtn")
let completeBtn = document.getElementById("completeBtn")

// Statistics elements 
let totalCount = document.querySelectorAll(".totalCount");
let activeCount = document.querySelectorAll(".activeCount");
let completeCount = document.querySelectorAll(".completedCount");
let progressCount = document.getElementById("progressCount");

// Form elements 
let form = document.querySelector(".form");
let saveBtn = document.getElementById("saveBtn");
let cancelBtn = document.getElementById("cancelBtn");

// Task list and search  
let list = document.getElementById("list");
let Input = document.getElementById("searchInput")


// ========================================
//     2. SHOW AND HIDE TASK FORM
// ========================================

addTaskBtn.addEventListener("click", function () {
    form.classList.remove("hidden");
});

cancelBtn.addEventListener("click", function () {
    form.classList.add("hidden");
});


// ========================================
//     3. ADD NEW TASK 
// ========================================

saveBtn.addEventListener("click", function () {
    let title = taskTitle.value.trim();
    let description = taskDescription.value.trim();
    let category = taskCategory.value;
    let priority = taskPriority.value;
    let date = taskDate.value;

    // Validate required fields
    if (title === "") {
        taskTitle.focus();
        return;
    }
    if (date === "") {
        taskDate.focus();
        return
    }

    // Create task element 
    let item = document.createElement("li");

    item.innerHTML = `
        <h2 class="task-heading">${title}</h2>
        <p class="task-description">${description}</p>

        <div class="task-details">
            <p class="details">${category}</p>
            <p class="details">${priority}</p>
            <p class="details">${date}</p>
        </div>
    `;

    // ------------------------------------
    // Delete Button
    // ------------------------------------

    let remove = document.createElement("button");
    remove.textContent = "Delete";
    remove.classList.add("removeBtn")
    item.append(remove);

    remove.addEventListener("click", function () {
        item.remove();
        refreshStats();
    });


    // ------------------------------------
    // Complete Button
    // ------------------------------------

    let complete = document.createElement("button");

    complete.textContent = "Complete";
    complete.classList.add("completeBtn");

    item.append(complete);

    complete.addEventListener("click", function () {

        if (item.classList.contains("complete-task")) {
            return;
        }

        item.classList.add("complete-task");
        complete.textContent = "Completed";
        complete.disabled = true;

        refreshStats();
    });

    // Add task to the list 
    list.append(item);

    // Clear fields and close form
    taskTitle.value = "";
    taskDescription.value = "";
    taskDate.value = "";
    form.classList.add("hidden");

    refreshStats();
});

// ========================================
// 4. STATISTICS UPDATE FUNCTIONS
// ========================================

// Common function
function refreshStats() {
    updateStatus();
    completeStatus();
    activeStatus();
}

// Total tasks
function updateStatus() {
    let total = list.children.length;

    totalCount.forEach(function (count) {
        count.innerText = total;
    });
}

// Completed tasks
function completeStatus() {
    let completed = list.querySelectorAll(".complete-task").length;

    completeCount.forEach(function (count) {
        count.innerText = completed;
    });
}

// Active tasks and progress
function activeStatus() {
    let total = list.children.length;
    let completed = list.querySelectorAll(".complete-task").length;
    let active = total - completed;

    activeCount.forEach(function (count) {
        count.innerText = active;
    })

    let progress = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    progressCount.innerText = `${progress}%`;
}

// ========================================
// 5. TASK FILTERS
// ========================================

// All Tasks Filter
allTaskBtn.addEventListener("click", function () {

    for (let item of list.children) {
        item.style.display = "";
    }
});


// Acive Tasks Filter 
activeBtn.addEventListener("click", function () {

    for (let item of list.children) {
        if (item.classList.contains("complete-task")) {
            item.style.display = "none"
        } else {
            item.style.display = "";
        }
    }
});

// Completed Tasks Filter 
completeBtn.addEventListener("click", function () {

    for (let item of list.children) {

        if (item.classList.contains("complete-task")) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
});


// ========================================
// 6. SEARCH FUNCTIONALITY
// ========================================

// Search while typing
Input.addEventListener("input", function () {

    let searchValue = Input.value.toLowerCase().trim();

    for (let item of list.children) {

        let title = item.querySelector(".task-heading").innerText.toLowerCase();

        if (title.includes(searchValue)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
});


// Search when clicking the input 
Input.addEventListener("click", function () {

    let searchValue = Input.value.toLowerCase().trim();

    for (let item of list.children) {

        let title = item.querySelector(".task-heading").innerText.toLowerCase();

        if (title.includes(searchValue)) {
            item.style.display = ""
        } else {
            item.style.display = "none"
        }
    }
});
