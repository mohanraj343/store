import { createSlice } from "@reduxjs/toolkit"

const DateTime = {

    datetime : []
}

const DateSlice = createSlice({

    name : "dateslice",
    initialState: DateTime,
    reducers : {

        adddate : (state,action)=>{

            state.datetime = action.payload
        }
    }
})

export const {adddate} = DateSlice.actions;
export default DateSlice.reducer;