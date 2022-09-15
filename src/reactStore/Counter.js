import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : { value: 0 }
}



const counterSlice = createSlice({
name : "counterSlice",
initialState : initialState,
reducers : {


    counterdata : (state, action) =>{
        switch (action.type) {
          case 'increment':
            return { ...state, value: state.value + action.type }
          case 'decrement':
            return { ...state, value: state.value - 1 }
          case 'incrementByAmount':
            return { ...state, value: state.value + action.type }
          default:
            return state
        }
      }
}

})

export const {counterdata} = counterSlice.actions;
export default counterSlice.reducer;