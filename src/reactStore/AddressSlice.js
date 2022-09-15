import { createSlice } from "@reduxjs/toolkit"

const ShippingData = {
    name : '',
    email :'',
    phone : null,
    address : "",
    pincode : null
}


const addressSlice = createSlice({

    name : "addressslice",
    initialState : ShippingData,
    reducers : {

        addressdata : (state , action)=>{

            state.address = action.payload.address
            state.pincode = action.payload.pincode
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
        }
    }
})

export const {addressdata} = addressSlice.actions;
export default addressSlice.reducer;