const { createSlice } = require('@reduxjs/toolkit');

const initialState = { name:null,label:null }

const property2Slice = createSlice({
    name: 'property2',
    initialState,
    reducers: {
        add2(state, action) {
            state.name = action.payload.name;
            state.label = action.payload.label;
        },
     
    },
});

export const { add2 } = property2Slice.actions;
export default property2Slice.reducer;