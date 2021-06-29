import React, {useState} from 'react';
import { TodoList } from './TodoList';
import { InputForm } from './InputForm';
import './index.css';

const initialTodos: Todo[] = [
  {
    text: 'feed the cat',
    complete: true,
  },
  {
    text: 'walk the dog',
    complete: false,
  },
];

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => 
      todo === selectedTodo 
        ? { ...todo, complete: !todo.complete}
        : todo
    );
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (selectedTodo: Todo) => {
    setTodos(todos.filter((todo) => todo !== selectedTodo));
  }

  return (
    <div className="TodoApp">
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <InputForm addTodo={addTodo} />
    </div>
  );
}

export default App;
