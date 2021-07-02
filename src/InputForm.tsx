import React, { useState } from 'react';

// interface Props {
//     addTodo: AddTodo;
// }

//  React.FC<Props> if not coming from .d.ts file
export const InputForm: React.FC<InputForm> = ({ addTodo }) => {

    const [inputText, setInputText] = useState('');
    const [inputPlace, setInputPlace] = useState('');

    // better to put it as inline func (otherwise, e type should be specified)
    // function addTask(e) {
    //     e.preventDefault();
    //     addTodo(inputText);
    //     setInputText('');
    // }


    return (
        // <form onSubmit={addTask}>
        <React.Fragment>

            <form className="formClass">
                <div className="formGroup">
                    <label htmlFor="text">Task:</label>
                    <input
                        type="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                    />

                </div>
                <div className="formGroup">

                    <label htmlFor="place">Where:</label>
                    <input
                        type="text"
                        value={inputPlace}
                        onChange={e => setInputPlace(e.target.value)}
                    />
                </div>
                <div className="formGroup">

                    <button
                        type="submit"
                        onClick={e => {
                            e.preventDefault();
                            addTodo(inputText, inputPlace);
                            setInputText('');
                            setInputPlace('');
                        }}
                    >Add</button>
                </div>
            </form>
        </React.Fragment>

    );
};