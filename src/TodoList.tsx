import React from 'react';
import { TodoItem } from './TodoItem';

// interface Props {
//     todos: Todo[];
//     toggleTodo: ToggleTodo;
//     removeTodo: RemoveTodo;
// }

export const TodoList: React.FC<TodoList> = ({ todos, toggleTodo, removeTodo }) => {
    return (
        <div className="TodoList">
            {todos.length > 0
            ? todos.map((todo, i) => (
                <TodoItem 
                    key={i} 
                    todo={todo} 
                    toggleTodo={toggleTodo} 
                    removeTodo={removeTodo} 
                />
            ))
            : "The To-Do List is empty 😵‍💫"}
        </div>
    )
}