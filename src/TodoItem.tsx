import React from 'react';

// *.d.ts file used instead (since it's used in every component)
// interface Todo {
//     text: string;
//     complete: boolean;
// }

// interface Props {
//     todo: Todo;
//     toggleTodo: ToggleTodo;
//     removeTodo: RemoveTodo;
// }

// declaring todoItem as functional component(Reac.FC) and passing props


export const TodoItem: React.FC<TodoItem> = ({ todo, toggleTodo, removeTodo }) => {
    
    return (
        <div className="TodoItem">
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
            >
                <input 
                    type="checkbox" 
                    checked={todo.complete} 
                    onClick={() =>  toggleTodo(todo)}
                    
                /> {todo.text}
            </label>
            <div className="Place_Clear">

            <div className="TodoPlace">
                {/* {todo.place} */}
                {todo.place === 'home' ? '🏠 Home' : todo.place === 'work' ? '💼 Work':  !todo.place ? '' :  '📍 '+todo.place}
                            
            </div>
            <div 
                className="TodoItem__remove" 
                onClick={() => removeTodo(todo)}
                > x</div>
                </div>
        </div>
    )
}