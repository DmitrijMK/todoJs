(function render() {
  if (tasks.length) for (const task of tasks) view.view(task);
})();

(function check() {
  for (const task of tasks) {
    const item = document.getElementById(task.id);
    const [buttonDelete] = item.getElementsByClassName('delete');
    const [buttonEdit] = item.getElementsByClassName('edit');

    if (buttonDelete && buttonDelete !== null) {
      buttonDelete.addEventListener('click', () => controller.deleteTask(task.id, item));
      buttonEdit.addEventListener('click', () => controller.editTask(task));
      item.addEventListener('click', () => controller.checkTask(task, item));
    }
  }
})();

