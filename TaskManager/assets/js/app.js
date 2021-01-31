// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top right of navigation

//Add Event Listener [Form, clearBtn and filter search input]

//form submit
form.addEventListener('submit',addNewTask);

//clear all tasks
clearBtn.addEventListener('click',clearAllTasks);

//Filter Task
filter.addEventListener('keyup',filterTasks);

//Remove task event[event delegation]
taskList.addEventListener('click',removeTask);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

//Add New Task Function definition
function addNewTask(e) {
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        return; //avoiding else statement
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul 
    taskList.appendChild(li);


   e.preventDefault();    //disable form submission
}

//Clear Task Function definition
function clearAllTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter tasks function definition
function filterTasks(e) {
    console.log("Task filter ...")
}


//Remove Task Function definition
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that?')) {
            e.target.parentElement.parentElement.remove()
        }
    }

}

// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}
