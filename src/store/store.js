// import { configureStore } from "@reduxjs/toolkit";

// import todoReducer from '../reducers/reducer';

// export const store = configureStore({
//     reducer: todoReducer
// })


import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from '../reducers/todoSlice';
import previewSlice from '../reducers/previewSlice';

const rootReducer = combineReducers({
    todos: todoReducer,
    preview: previewSlice
});

export const store = configureStore({
    reducer: rootReducer
});
