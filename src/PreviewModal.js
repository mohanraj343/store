import React, { useContext, useEffect, useState } from 'react'
import  Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { ShipContext, SuccessContext } from './App'
import cancel from './cancel.webp'
import { addstat } from './MyorderStatSlice'
import { adddate } from './reactStore/DateSlice'
import { reducedata } from './reactStore/DuplicateSlice'
import { OrderDetail } from './reactStore/OrderDetailsSlice'
import Successfull from './Successfull'

export default function PreviewModal(props) {
  const ship = useContext(ShipContext)
const dispatch = useDispatch()
const addressdata = useSelector(state=>state.addressreducer)
const product = useSelector(state=>state.productreducer.products)
const duplicate = useSelector(state=>state.duplicatereducer.duplicate)
const orderdetail = useSelector(state=>state.orderdetailreducer)
const dateadd = useSelector(state=>state.datereducer.datetime)

const successfun = useContext(SuccessContext)

  // console.log(typeof(data) , "addressdata");

  const preview = () => {
    const fl = product?.reduce((elem , element)=>{
      duplicate?.map(ele=>{
      if (element?.id === ele){
        console.log(element, "element");
      elem.push(element)
    }
    })
    return elem
    
      },[])
      return fl
  }

console.log(props.preview , "propssssssss");
 

console.log(duplicate , "duplicatemodal");

// console.log(dupLen() , "duplen");

  return (
    <div>
        <Modal  show={props?.show}>
<Modal.Body>

<div className='canceldiv'>
    <img className='cancel' src={cancel} onClick={props?.handleclose}></img>
    </div>     

<div>

<h4 className='text-center py-2'>{"Order Details"}</h4>
<p className='ms-4 pb-1'><b>{"Address : " }</b> {addressdata.address + "-" + addressdata.pincode}</p>

</div>

{/* <div className='orderdetails d-flex align-items-center justify-content-center'> */}

{preview()?.map((ele,index)=>{

  return <div key={index} className='row py-3'>
<div className='col-lg-3 d-flex justify-content-end'>
<img className='previewimg' src={ele?.image}></img>
</div>
<div className='col-lg-9 previewtext'>
<h6><b>{ele?.title}</b></h6>
<div className='d-flex'>
<p><b>{"Price : "}</b> {"₹" + (ele?.price*79.80).toFixed(2)}</p>
<p className='mx-auto'><b>{"Qty : "}</b> {ele?.qty}</p>
</div>
</div>
    </div>
})}
    {/* </div> */}

<div>

  <div></div>
  <h6 className='text-center text-success'><b>{"Total Price : "}</b>{props?.totall}</h6>
</div>
    <div className='d-flex align-items-center justify-content-center'>
      <button className='btn bg-info' onClick={()=>{props?.onSubmitPreview(true); 
            dispatch(OrderDetail({length : duplicate?.length , price : props?.totall , id : [...duplicate] , 
              orderid : orderdetail.orderid +1 , orderlist : [...orderdetail.orderlist ,{length : duplicate?.length , price : props?.totall , id : [...duplicate] , orderid : orderdetail.orderid +1}] } ));
      dispatch(reducedata([]));
      dispatch(addstat(true)) ;
      dispatch(adddate([...dateadd, new Date()]))
      }}>Place Order</button>
    </div>

</Modal.Body>
        </Modal>

    </div>
  )
}
