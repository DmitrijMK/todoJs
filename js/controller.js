const generateId = () => Math.random().toString(36).substr(2, 16);

function changeTask(value) {
  let x = true;
  if (tasks.length === 0) {
    createTask(value);
  } else {
    for (const task of tasks) {
      if (task.editNow) {
        task.title = value;
        x = false;
        setLocalData(tasks);
      }
    }
    if (x) createTask(value);
  }
}

function createTask(value) {
  const newTask = new Tasks(value);
  tasks.push(newTask);
  view(newTask);
  setLocalData(tasks);
}

function deleteTask(index, item) {
  item.remove();
  for (let i = 0; i < tasks.length; i++)
    if (tasks[i].id === index) tasks.splice(i, 1);
  setLocalData(tasks);
}

function checkTask(task, item) {
  task.completed = !task.completed;
  const [checkbox] = item.getElementsByClassName('checkbox');
  checkbox.checked = !checkbox.checked;
  setLocalData(tasks);
}

function editTask(task) {
  task.editNow = !task.editNow;
  addTaskInput.value = task.title;
}

function setLocalData(arr) {
  localStorage.setItem('myTodo', JSON.stringify(arr));
}

function getLocalData() {
  if (localStorage.getItem('myTodo') === null) return [];
  return JSON.parse(localStorage.getItem('myTodo'));
}
