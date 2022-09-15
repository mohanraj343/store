import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import cancel from './cancel.webp'

export default function MyOrderPreview(props) {
    const dispatch = useDispatch()
const addressdata = useSelector(state=>state.addressreducer)
const orderdetail = useSelector(state=>state.orderdetailreducer.orderlist)
const product = useSelector(state=>state.productreducer.products)
const dateadd = useSelector(state=>state.datereducer.datetime)
const order = orderdetail[props?.index]


const OrderPreview = ()=>{

    const fl = product?.reduce((elem , element)=>{
        order?.id?.map(ele=>{

        if (element?.id === ele){
          console.log(element, "element");
        elem.push(element)
      }
      })
      return elem
      
        },[])
        return fl
}



console.log(orderdetail.orderid , "orderdetails,,,,");

console.log(order,"order");
  return (
    <div>
        <Modal show={props?.show}>
            <Modal.Body>

<div className='canceldiv'>
    <img className='cancel' src={cancel} onClick={props?.close}></img>
    </div>     

<div>

<h4 className='text-center py-2'>{"Order Details"}</h4>

<div className='d-flex align-items-center justify-content-around'>
<p><b>{"Address : " }</b> {addressdata.address + "-" + addressdata.pincode}</p>

  <p><b>{"OrderId : "}</b>{"ORD00" + order?.orderid}</p>

</div>
<div className='d-flex justify-content-center'>
  <p><b>{"Ordered Date : "}</b>{dateadd[props?.index]?.toISOString().split("T")[0] }&nbsp; &nbsp; &nbsp;</p>
  <p>{dateadd[props?.index]?.toTimeString().slice(0,2) >12 ? ((dateadd[props?.index]?.toTimeString().slice(0,2) -12 ) >9 ? (dateadd[props?.index]?.toTimeString().slice(0,2) -12 ) : "0" + (dateadd[props?.index]?.toTimeString().slice(0,2) -12 )) + (dateadd[props?.index]?.toTimeString().slice(2,8)+" PM") : (dateadd[props?.index]?.toTimeString().slice(0,8)+" AM")}</p>

  </div>

</div>

{/* <div className='orderdetails d-flex align-items-center justify-content-center'> */}

{OrderPreview()?.map((ele,index)=>{

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
  <h6 className='text-center text-success'><b>{"Total Price : "}</b>{order?.price}</h6>
</div>
   
            </Modal.Body>
        </Modal>
    </div>
  )
}
