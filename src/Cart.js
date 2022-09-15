import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartContext, Duplicat, ShipContext, SuccessContext } from './App';
import DelModal from './DelModal';
import PreviewModal from './PreviewModal';
import { addressdata } from './reactStore/AddressSlice';
import { cartdata } from './reactStore/CartSlice';
import { addprice } from './reactStore/CustomPrice';
import { decrement, increment } from './reactStore/loginSlice';
import { addData } from './reactStore/ProductSlice';
import ShippingModal from './ShippingModal';
import Successfull from './Successfull';

export default function Cart() {

  const {getCartProducts} = useContext(CartContext)
  const addrdata = useSelector(state=>state.addressreducer.address)
  const CustomPrices = useSelector(state=>state.custompricereducer.pricelist)

  // console.log(props.dupliarr, "props");
  console.log(CustomPrices, "CustomPrices");
  const [preview , setpreview] = useState(false)
  const [shipping , setshipping] = useState(false)
  const [success , setsuccess] = useState(false)



  const Adresdata = useSelector(state=>state.addressreducer)

  const duplicate = useSelector(state=>state.duplicatereducer.duplicate)
const count = useSelector(state=>state.loginreducer.counter)
const [billing , setbilling] = useState(false)
const [customPrice , setcustomPrice] = useState({})
console.log(count , "count");
  const [data , setdata] = useState([])
  const [show , setshow] = useState(false)
  const [delid , setdelid] =useState()
  const baseurl = 'https://fakestoreapi.com/';

const dispatch = useDispatch()

// const duplicatee = useContext(Duplicat)
const product = useSelector(state=>state.productreducer.products)
const cartproduct = useSelector(state=>state.cartreducer.products)
  // console.log(props.dupliarr.map(ele=>ele) , "map");
  const request = axios.create({
    baseURL : baseurl
  })




const handleclose = ()=>{setshow(false); setshipping(false) ; setpreview(false); setsuccess(false)}


const increment =(id)=>{
dispatch(addData(product.map(ele=>{
  if(ele.id===id){
     ele = {...ele , qty : ele.qty+1} 
     return ele
  }
  else{
    return ele
  }
})))

}

const totall =()=>{
let amount=0;

duplicate?.map(ele=>{
 const ab = product?.find(elem=>elem.id ===ele)
 amount+= parseFloat(ab.customprice)*(ab.qty) ? parseFloat(ab.customprice)*(ab.qty) : parseFloat(ab.price)*(ab.qty)
})

console.log(amount  ,"amount");
return "₹"+ (amount*79.80)?.toFixed(2)
}
const decrement =(id)=>{
  dispatch(addData(product.map(ele=>{
    if(ele.id===id){
      // if(ele.qty < 1){
        ele = {...ele , qty : ele.qty === 1 ? ele.qty : ele?.qty -1} 
        return ele 
      // }
      // else{
      //   return ele
      // }
       }

      else{
        return ele
      }
  })))
  
  }


  const showed = () =>{

    if(addrdata){

      setpreview(true)

    }
    else{
      setshipping(true)
    }
  }

const dupLen =()=> duplicate?.length



const onSubmitAddress = (address)=>{
console.log("shippingfunction");
  handleclose()
  dispatch(addressdata({...Adresdata ,name : address.name , email : address.email , phone : address.phone , address : address.address , pincode: address.pincode}))

  setpreview(true)
}


const TCustomPrice = (price , id)=>{
  console.log(price?.slice(1) , "prcoe");
let copydata = [...product] //copy the total product
const itemIndex = [...copydata].findIndex(ele=>ele.id===id)      //find the index of the object we need to change   
copydata[itemIndex] = {...copydata[itemIndex] , customprice : price/79.80} // change => onchange value as custom price 

dispatch(addData([...copydata])) 
// dispatch(addprice({...CustomPrices, [id] : ab}))
}

// const Customzero= ()=>{
//   dispatch(addprice({}))




const onSubmitPreview = (state) =>{
  handleclose()
setsuccess(state)

}


  return (
<div className=''>
<DelModal  handleclose={handleclose} show={show}  id={delid}/>

  {getCartProducts().map((ele,index)=>{

return <div key={index} className='row cartout'>
    
<div className='d-flex'>
                    <img className={`cartimg${ele?.id} cartimg`} src={ele?.image}></img> 
                      <div className='carttext ps-2'> <h5>{ele?.title}</h5> <br></br>
                        <div className='d-flex'><p><b>{"Price : "}</b>&#8377; {(ele?.price*79.80).toFixed(2)}</p>
                        <label className='ms-5'><b>{"Custom Price"}&nbsp;&nbsp;</b></label>
                        <input type={'number'} defaultValue={"₹"+ (ele?.customprice*79.80).toFixed(2).toString()} onChange={(e)=>{TCustomPrice(e.target.value , ele?.id)}}  className='inp'></input></div>
                      <div className='d-flex'> <button className='buttonn' onClick={()=>{decrement(ele?.id) } }>-</button>

                      <p className='mt-3 mx-2'>{ele?.qty}</p>
                        <button className='buttonn' onClick={()=>{increment(ele?.id) }}>+</button></div>
                        <p><b>{"Category : "}</b>{ele?.category}</p>
                        </div>
                         
                        <div className='mt-auto ms-auto'>
                          <button onClick={()=>{setshow(true);setdelid(ele?.id)}}>del</button>
                        <p><b>{"TotalPrice : "}</b>&#8377; {ele.customprice ? ((ele?.customprice* ele?.qty)*79.80).toFixed(2) : ((ele?.price*79.80)*ele?.qty).toFixed(2)}</p>

                        </div>

</div>
</div>

})}
{duplicate.length > 0 && 
<div className='d-grid pt-3 justify-content-end'>
  <p><b>{"GrandTotal : " +  totall()}</b></p>
  <button className='btn bg-warning' onClick={()=>{showed() ; } }>Checkout</button>
  </div>}
  {preview &&
  <PreviewModal preview = {getCartProducts()} handleclose={handleclose} show={preview} totall={totall()} onSubmitPreview={onSubmitPreview}/> }
{shipping && <ShippingModal handleclose={handleclose} show={shipping} onSubmitAddress = {onSubmitAddress}/>
} 

 {success && <Successfull show ={success} close={handleclose} />}

</div>
  
  )

  
}
