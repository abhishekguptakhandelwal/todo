import { makeObservable, observable, action, computed } from "mobx";

class TodoStore {
  counter = 0;
  todos = [];
  bTodos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      counter: observable,
      bTodos: observable,
      createTodo: action,
      deleteTodo: action,
      Todo: action,
      increment: action,
      storeDetails: computed,
      updateTodo: action,
    });
  }

  createTodo(todo) {
    this.todos.push(todo);
    this.bTodos = this.todos;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.bTodos = this.todos;
  }

  updateTodo(data) {
    this.todos = this.todos.map((todo) => (todo.id === data.id ? data : todo));
    this.bTodos = this.todos;
  }

  increment() {
    this.counter++;
  }

  get storeDetails() {
    return `firstName : ${this.todos}  `;
  }

  Todo() {
    this.todos = this.bTodos;
  }

  onChangeSearch(value) {
    console.log(value);
    console.log("Inside onchange of mobx:- ", this.bTodos);

    this.todos = this.bTodos.filter((todo) =>
      todo.firstName.toLowerCase().includes(value.toLowerCase())
    );
  }
}

const TodoObj = new TodoStore();
export default TodoObj;
