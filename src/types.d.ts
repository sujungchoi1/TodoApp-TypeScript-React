// type declaration file (global)
// https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

type Place = 'home' | 'work' | {custom: string}

type CompletedTodo = Todo & {
  readonly complete: true
}


// Todo interface
interface Todo {
    // id: string;
    text: string;
    complete: boolean;
    place?: Place;
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
  completeAll: CompleteAll;
}

// Todo Item interface
interface TodoItem {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}
