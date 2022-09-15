import React from 'react'
import Modal  from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { OrderDetail } from './reactStore/OrderDetailsSlice';

export default function OrderCancelModal(props) {
    const orderdetail = useSelector(state=>state.orderdetailreducer);
    const dispatch= useDispatch();
console.log(orderdetail , "orderdetailssssssssssssss");

    const CancelOrder = ()=>{

      dispatch(OrderDetail({...orderdetail , orderlist : [...orderdetail.orderlist]?.filter((ele,ind)=> ind!==props.index) }))  


     }



  return (
    <div>
        <Modal show={props?.show}>
            <Modal.Body>
            <div className='py-4'>

<p className='text-center'><b>{"Are You Sure You Want To Cancel This Order?"}</b></p>

<div className='d-flex justify-content-end py-2'>
    <button className='me-5' onClick={props?.close}>No</button>
    <button className='me-5' onClick={()=>{CancelOrder(); props?.close()}}>Yes</button>
</div>
</div>

            </Modal.Body>
        </Modal>
    </div>
  )
}
