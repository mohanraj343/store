import { createSlice } from "@reduxjs/toolkit"

const heart = {
    heartarr : []
}
const heartSlice = createSlice({

    name : "heartslice",
    initialState : heart,
    reducers : {

        addarr : (state, action)=>{

            state.heartarr = action.payload
        }
    }
})

export const  {addarr} = heartSlice.actions;
export default heartSlice.reducer;