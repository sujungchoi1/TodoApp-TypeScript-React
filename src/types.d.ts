// type declaration file (global)
// https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

// Todo interface
interface Todo {
    // id: string;
    text: string;
    complete: boolean;
  }

// Input form interface
interface InputForm {
  addTodo: AddTodo;
}

// Todo List interface
interface TodoList {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

// Todo Item interface
interface TodoItem {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}


type AddTodo = (text: string) => void;

type ToggleTodo = (selectedTodo: Todo) => void;

type RemoveTodo = (selectedTodo: Todo) => void;