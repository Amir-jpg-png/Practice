let taskDict = {};
document.addEventListener("DOMContentLoaded", () => {
    taskDict = loadTasks(); 
    renderTasks(); 
});
let darkmode = false;



function loadTasks() {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : {};
}


function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function sortByChecked() {


}


function renderTasks() {
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";

    for (const [taskName, taskDate] of Object.entries(taskDict)) {
        const taskElement = document.createElement("div");
        taskElement.id = `tasks-${taskName}`;
        taskElement.innerHTML = `
            <div class="flex justify-between items-center bg-gray-200 text-black p-2 rounded-md mb-2">
                <input type="checkbox" id="checkbox-${taskName}" onclick="sortByChecked()">
                <span>${taskName}|${taskDate}</span>
                <button class="text-red-500 hover:text-red-700" onclick="deleteTask('${taskName}')">Delete</button>
            </div>
        `;
        tasksContainer.appendChild(taskElement);
    }
}


function changeTheme() {
    darkmode = !darkmode;
    if (darkmode) {
        document.getElementById("Body").setAttribute("class", "bg-gray-900 text-white");
        document.getElementById("systemColor").setAttribute("class", "bg-blue-900");
        document.getElementById("themeButton").setAttribute("class", "size-8 rounded-full bg-gray-950 hover:bg-gray-700 active:scale-95");
        document.getElementById("themeButton").innerHTML = "&#127769;";
        document.getElementById("logo").setAttribute("src", "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500");
    } else {
        document.getElementById("Body").setAttribute("class", "bg-neutral-100 text-black");
        document.getElementById("systemColor").setAttribute("class", "bg-gray-900");
        document.getElementById("themeButton").setAttribute("class", "size-8 rounded-full bg-neutral-200 hover:bg-neutral-300 active:scale-95");
        document.getElementById("themeButton").innerHTML = "☀️";
        document.getElementById("logo").setAttribute("src", "/logoipsum-363.svg");
    }
}


function createPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    popup.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
    popup.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            destroyPopup();
        }
    });
}


function destroyPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";

    popup.removeEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    popup.removeEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            destroyPopup();
        }
    });
    
}


function addTask() {

    const task = document.getElementById("Task").value;
    const date = new Date(document.getElementById("Date").value);

    if (task == "" || date == "") {
        alert('Please enter both a task and a date.');
        return;
    }

    if (task in taskDict) {
        alert('Task with the same name already exists.');
        return;
    }

    taskDict[task] = date;
    saveTasks(taskDict);
    renderTasks();

    
    document.getElementById("Task").value = "";
    document.getElementById("Date").value = "";
}


function deleteTask(taskName) {
    if (taskName in taskDict) {
        delete taskDict[taskName]; 
        saveTasks(taskDict);      
        renderTasks();            
    }
}
