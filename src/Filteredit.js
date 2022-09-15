import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Editmodal from './Editmodal'
import logo from './filteredit.png'
export default function Filteredit() {

    const data = useSelector(state=>state.modalreducer)
    const [state , setstate] =useState(false)

    console.log(data, "filterdata");
    const handleclose = ()=> setstate(false);
    
return (
    <div>

        <div className='d-flex justify-content-end pe-5 align-items-start'> 
        <img  src={logo} className='editpng' onClick={()=>{setstate(true)}}></img>

        </div>

    {data.status && ( 
    
    <div>
<h4>Edited Datas</h4>
<p>{"Name : " + data.name}</p>
<p>{"Email : " + data.email}</p>
<p>{"Password : " + data.password}</p>
<p>{"Phone Number : " + data.phone}</p>
<p>{"Address : " + data.address}</p>

        </div>
        
        )}
        <Editmodal show={state} handleclose ={handleclose} />

        </div>
)
}
