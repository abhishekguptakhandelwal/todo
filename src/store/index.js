import { makeObservable, observable, action, computed, autorun } from "mobx";

export default class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      deleteTodo: action,
    });
  }

  createTodo(todo = { id: Math.random, firstName: "", lastName: "", age: "" }) {
    this.todos.push(todo);
  }

  deleteTodo(todoId) {
    this.todos.filter(this.todos.id !== todoId);
  }

  get storeDetails() {
    return `firstName : ${this.todos.firstName}  and lastName : ${this.todos.lastName} total owners, so far!!!`;
  }

  getTodo() {
    return this.todos;
  }
}
