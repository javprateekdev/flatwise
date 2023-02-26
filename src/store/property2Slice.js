const { createSlice } = require('@reduxjs/toolkit');

const initialState = { title:null,label:null,Location:null,Type:null,price:null,floorplan1:null,floorplan2:null,floorplan3:null,logo:null,SuperArea:null,CarpetArea:null,NoofBalconies:null,Loading:null,Electricload:null,Powerbackup:null,FurnishedorSemifernished:null,CeilingHeight:null,MainDoorHeight:null,InternalDoorHeights:null,status:null }

const property2Slice = createSlice({
    name: 'property2',
    initialState,
    reducers: {
        add2(state, action) {
            state.title = action.payload.title;
            state.label = action.payload.label;
            state.Location = action.payload.Location;
            state.Type = action.payload.Type;
            state.price = action.payload.price;
            state.floorplan1 = action.payload.floorplan1;
            state.floorplan2 = action.payload.floorplan2;
            state.floorplan3 = action.payload.floorplan3;
            state.logo = action.payload.logo;
            state.SuperArea = action.payload.SuperArea;
            state.CarpetArea = action.payload.CarpetArea;
            state.NoofBalconies = action.payload.NoofBalconies;
            state.Loading = action.payload.Loading;
            state.Electricload = action.payload.Electricload;
            state.Powerbackup = action.payload.Powerbackup;
            state.FurnishedorSemifernished = action.payload.FurnishedorSemifernished;
            state.CeilingHeight = action.payload.CeilingHeight;
            state.MainDoorHeight = action.payload.MainDoorHeight;
            state.InternalDoorHeights = action.payload.InternalDoorHeights;
            state.status = action.payload.status;
        },
     
    },
});

export const { add2 } = property2Slice.actions;
export default property2Slice.reducer;