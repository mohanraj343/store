import { createSlice } from "@reduxjs/toolkit"

const OrderDetails = {

    length : null,
    price : null ,
    id : [] ,
    orderid : 0 ,
    orderlist : []

}



const OrderDetailsSlice = createSlice({

    name : 'OrderDetailsSlice',
    initialState : OrderDetails,
    reducers : {

        OrderDetail : (state, action)=>{

            state.length = action.payload.length
            state.price = action.payload.price
            state.id = action.payload.id
            state.orderid = action.payload.orderid
            state.orderlist = action.payload.orderlist
        
        }
    }
})

export const {OrderDetail} = OrderDetailsSlice.actions;
export default OrderDetailsSlice.reducer;