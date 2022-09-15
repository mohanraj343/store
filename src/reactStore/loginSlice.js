import { createSlice } from '@reduxjs/toolkit'

    const initialstate = {

        email : "",
        username: "",
        counter : 0
    }

    const loginSlice = createSlice({

        name: "loginSlice",
        initialState : initialstate,
        reducers :{  



            increment : state =>{
                state.counter = state.counter+1
            },
            decrement : state =>{
                state.counter = state.counter-1
            },
            storedata : (state, action)=>{
                
                state.email = action.payload.email
                state.username = action.payload.username

            },
            storeemail : (state, action)=>{
        
                state.email = action.payload

            },
            storeuser : (state, action)=>{
        
                state.username = action.payload

            }
    
    } 

    })

export const {storeemail,storeuser, increment ,decrement , storedata} = loginSlice.actions;
export default loginSlice.reducer;  //should be imported by store