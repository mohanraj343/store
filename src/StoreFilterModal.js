import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux';

export default function StoreFilterModal(props) {

    const [whislist , setwhislist] = useState(false);
    const [Cart , setCart] = useState(false);
    const [category , setcategory] = useState({0:false ,1: false , 2: false, 3:false})
   //  const [data , setdata] = useState([])
    const product = useSelector(state=>state.productreducer.products)



      //  useEffect(()=>{
      //   const productdata = new Set()
      //   product?.map(ele=>{
      //       console.log(ele?.category , "useeffect");
      //       productdata.add(ele?.category) 
      //    })
      //    setdata(productdata)

      //  },[])
    
       console.log(props.data1 , "propsdata1");


  return (
    <div>
        <Modal show={props.show}>

<Modal.Body>

<div>
 <div className='d-flex justify-content-evenly'>
    <div>
 <input type={'checkbox'}  onChange={(e)=>{setCart(e.target.checked)}}></input>
    <label>Cart</label> 
    </div>
    <div>
   <input type={'checkbox'} onChange={(e)=>{setwhislist(e.target.checked)}}></input>
    <label>Whislist</label>
   </div>
 
   </div>
   <div>
    <h5 className='my-2'>{"Categories "}</h5>
  {[...props?.data1]?.map((ele,index)=>{
   console.log(ele , "datas ele");

    return   <div key={index}>
    <input type={'checkbox'}  onChange={(e)=>{setcategory({...category, [index] : e.target.checked})}}></input>
       <label className='ms-2'>{ele}</label> 
       </div>
  })}
   </div>
<div className='d-flex justify-content-center mt-3'>
<button type={'submit'} onClick={()=>{props.state(Cart , whislist);props.filters(category);  setCart(false); setwhislist(false); props.close()}}>Submit</button>

</div>
</div>

</Modal.Body>
        </Modal>
    </div>
  )
}
