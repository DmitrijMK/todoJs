const tasks = getLocalData();

class Tasks {
  constructor(title) {
    this.id = generateId();
    this.title = title;
    this.completed = false;
    this.editNow = false;
  }
}