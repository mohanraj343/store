import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    name : "",
    email : "",
    password : "",
    phone : "",
    address : "",
    status : false
}

const modalSlice = createSlice({

    name : "modalslice",
    initialState,
    reducers : {
        updata : (state , action)=>{

            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
            state.phone = action.payload.phone
            state.address = action.payload.address
            state.status = action.payload.status
        }
    }
})

export const {updata} = modalSlice.actions;
export default modalSlice.reducer;