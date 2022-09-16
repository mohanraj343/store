import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import cancel from './cancel.webp'
import { setdata, setstat } from './reactStore/ProductModalSlice';

export default function Storemodal(props) {

console.log(props);
const [data1 , setdata1] = useState()

const dispatch = useDispatch()
const data = useSelector(state=>state.productmodalreducer.product)
const stat = useSelector(state=>state.productmodalreducer.stat)

const product = useSelector(state=>state.productreducer.products)
const baseurl = 'https://fakestoreapi.com/';
const request =  axios.create({
    baseURL :baseurl
})



// useEffect(()=>{
//     console.log(props);

//     request.get(`products/${props.id}`)
//     .then((result)=>{dispatch(setdata([result.data])) ; dispatch(setstat(true))
//     })
//     .catch((error)=>{console.log(error);})

// },[])



// console.log(typeof(data[0]) , "data");

//     const promise = new Promise((resolve,reject)=>{

//     let a ;
// useEffect(()=>{

// a = 
// console.log(a , "a");

// },[])

        
//         else{
//             reject("whoops! some error occurs")
//         }

//     })
    
//     promise.then((result)=>{
// console.log(result, "result");


console.log(data , "data");
console.log(stat , "stat");
        return (
            <div>
                <Modal show={props.show}>
                    <Modal.Body>

{/*                 
                    <div className='d-flex justify-content-center align-items-center spin'>
<Spinner animation="border" />
                    </div> */}
                
<div className='py-2'>
<div className='canceldiv'>
    <img className='cancel' src={cancel} onClick={props.handleclose}></img>
    </div> 

 <div className='row'>
        {[product?.find(ele=>ele?.id===props?.id)]?.map((ele,ind)=>{
    console.log(ele);
            return <div key={ind} className='row mx-auto'>
    
            <div className='d-flex row'>
    <div className='left col-lg-4'>
                                <img src={ele?.image[0]}></img> 
                                   </div>
                                   <div className='col-lg-8'> <h5>{ele?.title}</h5> <br></br>
                                    <p><b>{"Price : "}</b>&#8377; {ele?.price*79.80}</p>
                                    <p><b>{"Category : "}</b>{ele?.category}</p>
            </div>
                                    </div>
                                    <p className='pt-2'><b>{"Description : "}</b>{ele?.description}</p>
                                    </div>
        })}
        </div>
        </div>
                    </Modal.Body>
                </Modal>
            </div>
          )
    // }).catch((error)=>{

    //     return(
    //         <p>{error}</p>
    //     )
    // })


}
