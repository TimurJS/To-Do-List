const addTaskBtn = document.getElementById('add-task-btn');         // "Add a task" button
const deskTaskInput = document.getElementById('description-task');  // task text
const todosWrapper = document.querySelector('.todos-wrapper');      // task placement block on the page

let tasks; // array of tasks
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
let todoItemElems = []; // all tasks

// forms an object with task data
function Task(description) {
    this.description = description;
    this.completed = false;
}

// function that forms a template for each task
const createTemplate = (task, index) => {
    return `
        <div class="todo-item ${task.completed ? 'checked' : ''}">
            <div class="description">${task.description}</div>
            <div class="buttons">
                <input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
                <button onclick="deleteTask(${index})" class="btn-delete">Done</button>
            </div>
        </div>
    `
}

// function for updating the contents of the Local Storage under the key "tasks"
const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function of filtering active and completed tasks before displaying them on the page
const filterTasks = () => {
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
    tasks = [...activeTasks, ...completedTasks];
}

// function that starts the process of creating tasks and displays them on the page
const fillHtmlList = () => {
    todosWrapper.innerHTML = '';
    if (tasks.length > 0) {
        filterTasks();
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        todoItemElems = document.querySelectorAll('.todo-item');
    }
}
fillHtmlList();

// runs when the "Add a task" button is clicked
addTaskBtn.addEventListener('click', () => {
    if (deskTaskInput.value != '') {
        tasks.push(new Task(deskTaskInput.value));
        updateLocal();
        fillHtmlList();
        deskTaskInput.value = '';
    }
});

// runs when the task is completed (the checkbox is selected)
const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        todoItemElems[index].classList.add('checked');
    } else {
        todoItemElems[index].classList.remove('checked');
    }
    updateLocal();
    fillHtmlList();
}

// runs when a task is deleted (the delete button "Done" is clicked)
const deleteTask = index => {
    todoItemElems[index].classList.add('delition');
    setTimeout(() => {
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();
    }, 500);
};