// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button onclick="removeTask(this)">Delete</button>
  `;

  // Append to the task list
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = '';
}

// Function to remove a task
function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

// Add task on button click
addTaskButton.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
