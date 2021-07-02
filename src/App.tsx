import React, {useState} from 'react';
import { TodoList } from './TodoList';
import { InputForm } from './InputForm';
import './index.css';

const initialTodos: Todo[] = [
  {
    text: 'feed the cat',
    complete: true,
    place: 'home',
  },
  {
    text: 'walk the dog',
    complete: false,
  },
];

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo): void => {
    const newTodos = todos.map(todo => 
      todo === selectedTodo 
        ? { ...todo, complete: !todo.complete}
        : todo
    );
    setTodos(newTodos);
  }

  const completeAll = (selectedTodo: readonly Todo[]): void => {
    const newTodos = todos.map(todo => ({
        ...todo,
        complete: true
    }));
    setTodos(newTodos);
}

  const addTodo = (text: string, place: Place): void => {
    const newTodo = { text, complete: false, place };
    setTodos([...todos, newTodo]);
  }



  const removeTodo = (selectedTodo: Todo): void => {
    setTodos(todos.filter((todo) => todo !== selectedTodo));
  }

  return (
    <div className="TodoApp">
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} completeAll={completeAll} />
      <InputForm addTodo={addTodo} />
    </div>
  );
}

export default App;
