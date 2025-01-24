import { makeAutoObservable } from "mobx";

class TaskStore {
  tasks = [];
  filter = "all";

  constructor() {
    makeAutoObservable(this);
  }

  addTask = (text) => {
    this.tasks.push({
      id: Date.now(),
      text,
      completed: false,
    });
  };

  toggleTask = (id) => {
    this.tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
  };

  removeTask = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };

  setFilter(filter) {
    this.filter = filter;
  }

  get filteredTasks() {
    switch (this.filter) {
      case "completed":
        return this.tasks.filter((task) => task.completed);
      case "incompleted":
        return this.tasks.filter((task) => !task.completed);
      default:
        return this.tasks;
    }
  }
}

export default new TaskStore();
