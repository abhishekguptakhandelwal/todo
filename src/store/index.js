import { makeObservable, observable, action, computed } from "mobx";

class TodoStore {
  counter = 0;
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      counter: observable,
      createTodo: action,
      deleteTodo: action,
      Todo: computed,
      increment: action,
      storeDetails: computed,
      updateTodo: action,
    });
  }

  createTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  updateTodo(data) {
    this.todos = this.todos.map((todo) => (todo.id === data.id ? data : todo));
  }

  increment() {
    this.counter++;
  }

  get storeDetails() {
    return `firstName : ${this.todos}  `;
  }

  get Todo() {
    return this.todos;
  }
}

const TodoObj = new TodoStore();
export default TodoObj;
