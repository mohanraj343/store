import { createSlice } from "@reduxjs/toolkit"

const initialState ={

    stat : false
}

const myorderSlice = createSlice({

    name : "myorderslice",
    initialState,
    reducers : {

        addstat : (state , action)=>{

            state.stat = action.payload
        }
    }
})

export const {addstat} = myorderSlice.actions;
export default myorderSlice.reducer;