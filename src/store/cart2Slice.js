const { createSlice } = require('@reduxjs/toolkit');


const cartSlice2 = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        add4(state, action) {
            state.push(action.payload);
        },
     
    },
});

export const { add4 } = cartSlice2.actions;
export default cartSlice2.reducer;