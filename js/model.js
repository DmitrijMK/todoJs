const controller = new Controller();
const view = new View();
const tasks = controller.getLocalData();
const addTaskInput = document.getElementById('addTaskInput');

class Tasks {
  constructor(title) {
    this.id = controller.generateId();
    this.title = title;
    this.completed = false;
    this.editNow = false;
  }
}