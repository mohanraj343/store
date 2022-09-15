import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MyOrderPreview from './MyOrderPreview';
import OrderCancelModal from './OrderCancelModal';
import cancel from './cancel.webp';
import eye from './eye.png'
import filter from './filter.png'
import FilterModal from './FilterModal';

export default function MyOrders() {

    const orderdetail = useSelector(state=>state.orderdetailreducer.orderlist)
    const dateadd = useSelector(state=>state.datereducer.datetime)
    const [cancelOrder , setcancelOrder] =useState(false)
    const [cancelid  , setcancelid] =useState(-1)
    const [preview , setpreview] = useState(false)
    const [previewIndex , setpreviewIndex] =useState(-1)
    const [filtermodal , setfiltermodal] =useState(false)
    const [fromfilter , setfromfilter] = useState(false)
    const [orders , setorders] = useState([...orderdetail])
    const [search , setsearch] =useState()
    console.log(orderdetail, "orderdeails............");
    console.log(orderdetail.orderid, "orderid");
    console.log(orderdetail.orderlist , "orderlist");

  const close =()=> setcancelOrder(false)
  const previewclose =()=> setpreview(false)
  const handleclose =()=> setfiltermodal(false)

console.log(orders , "orders");



useEffect(()=>{

  setorders([...orderdetail])
},[orderdetail])


const searchfilter =(e)=>{

  const ab = orderdetail?.filter(ele=>{
    if(("ORD00"+ele?.orderid).includes(e.toUpperCase())){
  console.log(ele , "SEARCH ELEMENT.............................................................................");
        return ele
  }
 
 

  })

  setorders(ab)
}




  
  const filterfun= (id,min,max)=>{
    console.log(search , " searchfilterfun");
    handleclose();
console.log(fromfilter , "true or false");
console.log(id, "orderid");
console.log(min, max , "minmax");
console.log(typeof(min) , "mintype");
// console.log(orders , "orderdataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

const ab = orderdetail?.filter(ele=>{
  console.log(id?.slice(5), "ele");
let elem;

  if((ele?.orderid) === parseInt(id?.slice(5)) ) {

    console.log(ele, "ele2");

    elem = ele
  }

  else if (!min && !max && !id){

    elem = ele
  }

else if(!min || ele?.length >= parseInt(min) && !max || ele?.length <= parseInt(max)){
console.log(ele, "ele1");
    elem = ele
  }



console.log(elem ,"element..............");
  return elem

})

console.log(ab , "abb");
setorders(ab)


  }

  // const orders = orderdetail.filter((ele)=>{
  // })

  console.log(dateadd, "date");

  return (

  <div>
    
    <div className='d-flex align-items-center justify-content-between'>
      <input type={'search'} onChange={(e)=>{searchfilter(e.target.value)}} placeholder={"Search"} className='MyProductsSearch'>
      </input>
<img src={filter} className='filterimg' onClick={()=>{setfiltermodal(true)}} ></img>
    </div>

    {orders && orders.map((ele,index)=>{

        return   <div key={index} className='divbg my-3' >

        <div className='d-flex align-items-center justify-content-around'>
        <h6><b>{"OrderId : "}</b>{"ORD00"+ele?.orderid}</h6>
<p><b>{"Price : "}</b>{ele?.price}</p>
        </div>
<div className='d-flex align-items-center justify-content-around'>

<p><b>{"Product Count : "}</b>{ele?.length}</p>
<div>
<img className='cancel ms-3' src={cancel} onClick={()=>{setcancelid(index); setcancelOrder(true); }}></img>
<img src={eye} onClick={()=>{setpreviewIndex(index); setpreview(true) ; }} className='cancel me-3'></img>
</div>
</div>

<div className='d-flex justify-content-center'>
  <p><b>{"Ordered Date : "}</b>{dateadd[index].toISOString().split("T")[0] }&nbsp; &nbsp; &nbsp;</p>
  <p>{dateadd[index].toTimeString().slice(0,2) >12 ? ((dateadd[index].toTimeString().slice(0,2) -12 ) >9 ? (dateadd[index].toTimeString().slice(0,2) -12 ) : "0" + (dateadd[index].toTimeString().slice(0,2) -12 )) + (dateadd[index].toTimeString().slice(2,8)+" PM") : (dateadd[index].toTimeString().slice(0,8)+" AM")}</p>

  </div>

    </div>
    })}

    {orders.length===0 && <div className='d-flex align-items-center justify-content-center'>
      
      <p>{"No Data Found"}</p>
      </div>}

    {/* {fromfilter && filterfun()?.map((ele,index)=>{

return   <div key={index} className='divbg my-3' >

<div className='d-flex align-items-center justify-content-around'>
<h6><b>{"OrderId : "}</b>{"ORD00"+ele?.orderid}</h6>
<p><b>{"Price : "}</b>{ele?.price}</p>
</div>
<div className='d-flex align-items-center justify-content-around'>

<p><b>{"Product Count : "}</b>{ele?.length}</p>
<div>
<img className='cancel ms-3' src={cancel} onClick={()=>{setcancelid(index); setcancelOrder(true); }}></img>
<img src={eye} onClick={()=>{setpreviewIndex(index); setpreview(true) ; }} className='cancel me-3'></img>
</div>
</div>

<div className='d-flex justify-content-center'>
<p><b>{"Ordered Date : "}</b>{dateadd[index].toISOString().split("T")[0] }&nbsp; &nbsp; &nbsp;</p>
<p>{dateadd[index].toTimeString().slice(0,2) >12 ? ((dateadd[index].toTimeString().slice(0,2) -12 ) >9 ? (dateadd[index].toTimeString().slice(0,2) -12 ) : "0" + (dateadd[index].toTimeString().slice(0,2) -12 )) + (dateadd[index].toTimeString().slice(2,8)+" PM") : (dateadd[index].toTimeString().slice(0,8)+" AM")}</p>

</div>

</div>
})

    } */}

<OrderCancelModal show={cancelOrder} close={close} index={cancelid} />
<MyOrderPreview show={preview} close={previewclose} index= {previewIndex} />
<FilterModal show={filtermodal}  close={handleclose} filterfun={(state, id , min ,max)=>{
  console.log(state , id , min, max , "function values");
  filterfun(state , id , min, max)}}/>

  </div>
 
  )
}





