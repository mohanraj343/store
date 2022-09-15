import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    name : ""
}

const  similiarSlice = createSlice({

name : "similiarslice",
initialState,
reducers : {
    
    
  sameAs :  (state , action)=>{

    state.name = action.payload;
}
}
}) 

export const {sameAs} = similiarSlice.actions;
export default similiarSlice.reducer;