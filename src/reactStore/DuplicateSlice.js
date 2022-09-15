import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    duplicate : []
}


const duplicateSlice = createSlice({

    name : "duplicateslice",
    initialState,
    reducers : {

        reducedata : (state, action)=>{

            state.duplicate = action.payload
        }
    }
})

export const {reducedata} = duplicateSlice.actions;
export default duplicateSlice.reducer;