import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../reducers/todoSlice';
import { previewText } from '../reducers/previewSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    // const handleChange = (e, updateTodo) => {
    //     e.preventDefault();
    //     const input = e.target.value;
    //     dispatch(updateTodo(input));
    // };

    const handleChange = (e, previewText) => {
        e.preventDefault();
        const preview = e.target.value;
        dispatch(previewText(preview));
    };

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
        dispatch(previewText(''));
    }

    return (
        <div>
            <form className="max-w-sm mx-auto mt-9" onSubmit={addTodoHandler}>
                <label htmlFor="text" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Todo</label>
                <div className="flex gap-5">
                    <div className="w-full">
                        <input
                            type="text"
                            id="text"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                handleChange(e, previewText);
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Todo..." required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;
