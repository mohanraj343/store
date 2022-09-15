import { createSlice } from "@reduxjs/toolkit";


    const initialState = {
    
        name : {value : "", isedit : false},
        email : {value : "", isedit : false},
        phone : {value : "", isedit : false},
        password : {value : "", isedit : false},
        Address : {value : "", isedit : true}
    
    }



    const formSlice = createSlice({
    
    name : "formslice" ,
    initialState,
    reducers :{
    
    formdata : (state, action)=>{
        
        state.name = action.payload.name
        state.email = action.payload.email
        state.phone = action.payload.phone
        state.password = action.payload.password
        state.Address = action.payload.Address

        console.log(formSlice.actions , "actions......." );


        
    }
    }

})

export const {formdata} = formSlice.actions;

export default formSlice.reducer;