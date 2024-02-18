import { createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
    name: 'preview',
    initialState: {
        text: '',
    },
    reducers: {
        previewText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { previewText } = previewSlice.actions;

export default previewSlice.reducer;