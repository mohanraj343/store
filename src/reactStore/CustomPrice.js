import { createSlice } from "@reduxjs/toolkit"

const customPrice = {

    pricelist : []
}


const customPriceSlice = createSlice({

    name : "custompriceslice",
    initialState : customPrice,
    reducers : {

        addprice : (state, action)=>{
            state.pricelist = action.payload
        }
    }

})

export const {addprice } = customPriceSlice.actions;
export default customPriceSlice.reducer;