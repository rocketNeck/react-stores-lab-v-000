import Store from './Store'
class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
    super(0);
  }

  increment () {
    const count = this.getState() + 1;
    this.setState(count);
  }

  decrement () {
    const count = this.getState() - 1;
    this.setState(count);
  }
}

const counterStore = new CounterStore();

export default counterStore;
