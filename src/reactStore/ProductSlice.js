import { createSlice } from "@reduxjs/toolkit"

const initialState ={

    products : [],

}

const productSlice =  createSlice({

    name: "productslice",
    initialState,
    reducers : {
        addData : (state , action)=>{

            state.products =action.payload
               

    
        }
    }
}) 

export const {addData} = productSlice.actions;
export default productSlice.reducer;