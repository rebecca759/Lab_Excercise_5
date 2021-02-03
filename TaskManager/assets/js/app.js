// Define UI Variables
const taskInput = document.querySelector("#task"); //the task input text field

const form = document.querySelector("#task-form"); //The form at the top

const filter = document.querySelector("#filter"); //the task filter text field

const taskList = document.querySelector(".collection"); //The ul

const taskList2 = document.querySelector(".collection-sorted");

const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button

const reloadIcon = document.querySelector(".fa"); // the reload button at the top right of navigation

const dropdown = document.querySelector('#dropdown1');

const dropdownSelected = document.querySelector('.dropdown-trigger');

// sorting buttons
$(".dropdown-trigger").dropdown();
const ascendingBtn = document.querySelector(".ascending-btn");

const descendingBtn = document.querySelector(".descending-btn");

const collectionSorted = document.querySelector(".collection-sorted");

// Add Event Listener [Form, clearBt and filter search input]

// form submit
form.addEventListener("submit", addNewTask);

// clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);

// Filter Task
filter.addEventListener("keyup", filterTasks);

// Remove task event [event delegation]
taskList.addEventListener("click", removeTask);

// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);

//Event Listener for ascending and descending buttons
ascendingBtn.addEventListener("click", ascendingSort);
descendingBtn.addEventListener("click", descendingSort);


// Add new Task Function definition
function addNewTask(e) {
  const dateID = Date.now();

  if (taskInput.value == "") {
    // alert("Enter New Task"); removed
    taskInput.style.borderColor = "red";
    return; // Avoiding else statement
  }

  // Creat an li element when the user adds a task
  const li = document.createElement("li");
  // adding a class
  li.className = "collection-item";
  // Create text node and append it
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';

  const dateSpan= document.createElement("span");
  dateSpan.className = "date";
  dateSpan.style.display = "none";
  dateSpan.textContent = dateID;
  li.appendChild(dateSpan);
  // Append link to li
  li.appendChild(link);
  // Append to ul
  taskList.appendChild(li);
  taskInput.value = "";

  // alert("Add New Task ..."); removed
  e.preventDefault(); // Disable from submission
}

// Clear Task Function definition
function clearAllTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks function definition
function filterTasks(e) {
  let searchInput = filter.value;

  const tasks = document.querySelectorAll(".collection-item");
  
  tasks.forEach(
      function (currentValue) {
      if ((currentValue.textContent).indexOf(searchInput) > -1) {
        currentValue.style.display = "block";
      } 
      else {
        currentValue.style.display = "none";
      }
    }); 
}

// Remove Task function definition
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ? ")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Reload Page Function 
function reloadPage() {
  // using the reload fun on location object
  location.reload();
}



// ascending sorting
function ascendingSort() {
  const unorderedList = document.querySelectorAll(".collection-item");
  var orderingList = new Array();
  const currentTime = Date.now();

  for (let i = 0; i < unorderedList.length; i++) {
    listItem = unorderedList[i].querySelector(".date");
    taskListTime = listItem.textContent;
    let differenceTime = currentTime - taskListTime;
    orderingList[i] = [differenceTime, i];
  }

  orderingList.sort();

  for (let i = 0; i < unorderedList.length; i++) {
    taskList.appendChild(unorderedList[orderingList[i][1]]);
  }
}

// descending sorting
function descendingSort() {
  const unorderedList = document.querySelectorAll(".collection-item");
  var orderingList = new Array();
  const currentTime = Date.now();

  for (let i = 0; i < unorderedList.length; i++) {
    listItem = unorderedList[i].querySelector(".date");
    taskListTime = listItem.textContent;
    let differenceTime = currentTime - taskListTime;
    orderingList[i] = [differenceTime, i];
  }

  orderingList.reverse();

  for (let i = 0; i < unorderedList.length; i++) {
    taskList.appendChild(unorderedList[orderingList[i][1]]);
  }
}




