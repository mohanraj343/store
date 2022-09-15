import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    product : [],

    stat : false
}

const productmodalSlice = createSlice({

    name : "productmodalslice",
    initialState,
    reducers : {

        setdata : (state, action)=>{

            state.product = action.payload
        },

        setstat : (stat , action)=>{
stat.stat = action.payload
        }
    }

})

export const {setdata , setstat} = productmodalSlice.actions;
export default productmodalSlice.reducer;