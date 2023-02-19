const { createSlice } = require('@reduxjs/toolkit');

const initialState = { name:null,label:null}

const property3Slice = createSlice({
    name: 'property3',
    initialState,
    reducers: {
        add3(state, action) {
            state.name = action.payload.name;
            state.label = action.payload.label;
           
        },
     
    },
});

export const { add3 } = property3Slice.actions;
export default property3Slice.reducer;