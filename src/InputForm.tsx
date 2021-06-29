import React, {useState} from 'react';

// interface Props {
//     addTodo: AddTodo;
// }


                    //  React.FC<Props> if not coming from .d.ts file
export const InputForm: React.FC<InputForm> = ({ addTodo }) => {
    const [inputText, setInputText] = useState('');

    // better to put it as inline func (otherwise, e type should be specified)
    // function addTask(e) {
    //     e.preventDefault();
    //     addTodo(inputText);
    //     setInputText('');
    // }

    return (
        // <form onSubmit={addTask}>
        <form>
            <input 
                type="text" 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
            <button 
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    addTodo(inputText);
                    setInputText('');
                }}
            >Add</button>
        </form>
    );
};