import {
  action,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";

class CounterStore {
  count = 0;

  get total() {
    return this.count * 2;
  }

  constructor() {
    // makeObservable(this, {
    //   count: observable,
    //   increment: action,
    //   decrement: action,
    //   total: computed,
    // });
    makeAutoObservable(this);
  }

  increment = (value) => {
    this.count += value;
  };

  decrement = (value) => {
    this.count -= value;
  };
}

export default CounterStore;
