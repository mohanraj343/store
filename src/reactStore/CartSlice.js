import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    products : []
}

const cartSlice = createSlice({

    name : "cartslice",
    initialState,
    reducers : {

        cartdata : (state, action)=>{

            state.products = action.payload;
        }
    }
})

export const {cartdata} = cartSlice.actions;
export default cartSlice.reducer;