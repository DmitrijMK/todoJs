const addTaskInput = document.getElementById('addTaskInput');

(function render() {
  if (tasks.length) for (const task of tasks) view(task);
})();

(function check() {
  for (const task of tasks) {
    const item = document.getElementById(task.id);
    const [buttonDelete] = item.getElementsByClassName('delete');
    const [buttonEdit] = item.getElementsByClassName('edit');

    if (buttonDelete && buttonDelete !== null) {
      buttonDelete.addEventListener('click', () => deleteTask(task.id, item));
      buttonEdit.addEventListener('click', () => editTask(task));
      item.addEventListener('click', () => checkTask(task, item));
    }
  }
})();

