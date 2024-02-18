import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../reducers/reducer';
import { MdDelete } from "react-icons/md";

function Todos() {
    const todos = useSelector((state) => state.todos.todos);
    const text = useSelector((state) => state.preview.text);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-auto mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="w-[100px] px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {todo.text}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => dispatch(removeTodo(todo.id))} type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-red-600 dark:text-red-500 hover:underline">
                                        <MdDelete size={18} className="mr-1" />
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" colSpan="2">
                                {text}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todos;
