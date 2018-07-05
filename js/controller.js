class Controller {
  generateId() {
    return Math.random().toString(36).substr(2, 16);
  }

  changeTask(value) {
    let x = true;
    if (tasks.length === 0) {
      this.createTask(value);
    } else {
      for (const task of tasks) {
        if (task.editNow) {
          task.title = value;
          x = false;
          this.setLocalData(tasks);
        }
      }
      if (x) this.createTask(value);
    }
  }

  createTask(value) {
    const newTask = new Tasks(value);
    tasks.push(newTask);
    view.view(newTask);
    this.setLocalData(tasks);
  }

  deleteTask(index, item) {
    item.remove();
    for (let i = 0; i < tasks.length; i++)
      if (tasks[i].id === index) tasks.splice(i, 1);
    this.setLocalData(tasks);
  }

  checkTask(task, item) {
    task.completed = !task.completed;
    const [checkbox] = item.getElementsByClassName('checkbox');
    checkbox.checked = !checkbox.checked;
    this.setLocalData(tasks);
  }

  editTask(task) {
    task.editNow = !task.editNow;
    addTaskInput.value = task.title;
  }

  setLocalData(arr) {
    localStorage.setItem('myTodo', JSON.stringify(arr));
  }

  getLocalData() {
    if (localStorage.getItem('myTodo') === null) return [];
    return JSON.parse(localStorage.getItem('myTodo'));
  }
}
