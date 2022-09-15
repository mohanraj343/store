import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formdata } from './reactStore/FormSlice'
import edit from './edit.ico'
import tik from './tik1.png'

export default function Formdata() {

    // const [imgstate , setimgstate] = useState(false)
const dispatch = useDispatch()
    const data = useSelector(state=>state.formreducer)

const [datas , setdatas] = useState({})

const namef =()=>{
    if((datas?.name).length >15){
        alert("character must be 15 or less")
    }
    else if(datas?.name ===""){
        alert("field cannot be empty")
    }
    else{
        return true
    }
}
const email = ()=>{

    let emailregex =/^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/

    if(!emailregex.test(datas?.email)){
        alert("Invalid email Address")
    }
    else{
        return true
    }

}
const password =()=>{
    let passregex = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/

    if(!passregex.test(datas?.password)){
        alert("Invalid password")
    }
    else{
        return true
    }
}

const phone =()=>{

    let phoneregex =/^[6-9]{1}\d{9}$/

    if(!phoneregex.test(datas?.phone)){
        alert("Invalid Phone Number")
    }
    else{
        return true
    }
}

const address =()=>{
    if(datas?.address===""){
        alert("field cannot be empty")
    }
    else{
        return true
    }
}

    if(data?.Address?.value!=='' && data.Address.isedit===false){

    
    return (
    <div>

        <h3>Formdata</h3>
    {!data.name.isedit ?(
        <div className='d-flex align'> 
        <p>{"Name : " + data.name.value}</p> 
        <img src={edit} className='mt-2' onClick={()=>{
                setdatas((prev)=>({...prev , name : data.name.value}))
    dispatch(formdata({...data,  name : {value : data.name.value , isedit : true}}))}}></img>
</div> )

        :  (<div className='d-flex align'> 
    <p>Name</p>

<input defaultValue={data.name.value} className='text-center'
    onChange={(e)=>{setdatas((prev)=>({...prev ,  name : e.target.value}))}}
    ></input>
<img src={tik} onClick={()=>{ {dispatch(formdata(namef() && {...data,  name : {value : datas?.name==="" ? data.name.value : datas.name  , isedit : false}}))}}} className='mt-2'></img>
</div> )

}
{!data.email.isedit ?
    (<div className='d-flex align'> 
        <p>{"Email : " + data.email.value}</p> 
        <img src={edit} className='mt-2' onClick={()=>{
            setdatas((prev)=>({...prev , email : data.email.value}))
            dispatch(formdata({...data,  email : {value : data.email.value , isedit : true}}))}}></img>   </div> )

:      (  <div className='d-flex align'> 
    <p>Email</p>

<input defaultValue={data.email.value}  onChange={(e)=>{setdatas((prev)=>({...prev ,  email : e.target.value}))}}
className='text-center'></input>
<img src={tik} onClick={()=>{
    
    console.log(datas.email ,"tik onclick datas email");
    console.log(data.email.value , "tik onclick store value");
    {dispatch(formdata(email() && {...data,  email : {value : datas?.email==="" ? data.email.value : datas.email , isedit : false}}))}}} className='mt-2'></img>
</div> )

} 
{!data.password.isedit ?
    (<div className='d-flex align'> 
        <p>{"Password : " + data.password.value}</p> 
        <img src={edit} className='mt-2' onClick={()=>{
                        setdatas((prev)=>({...prev , password : data.password.value}))

            dispatch(formdata({...data,  password : {value : data.password.value , isedit : true}}))}}></img>   </div> )

    :       ( <div className='d-flex align'> 
    <p>Password</p>

    <input defaultValue={data.password.value}  onChange={(e)=>{setdatas((prev)=>({...prev ,  password : e.target.value}))}}
    className='text-center'></input>
    <img src={tik} onClick={()=>{{dispatch(formdata(password() && {...data,  password : {value : datas?.password==="" ? data.password.value : datas.password  , isedit : false}}))}}} className='mt-2' ></img>
    </div> )

    }
    {!data.phone.isedit ?
        (<div className='d-flex align'> 
        <p>{"Phone : " + data.phone.value}</p> 
        <img src={edit} className='mt-2' onClick={()=>{
                        setdatas((prev)=>({...prev , phone : data.phone.value}))

            dispatch(formdata({...data,  phone : {value : data.phone.value , isedit : true}}))}}></img>   </div> )

    :       ( <div className='d-flex align'> 
    <p>Phone</p>
    <input defaultValue={data.phone.value}  onChange={(e)=>{setdatas((prev)=>({...prev ,  phone : e.target.value}))}}
    className='text-center'></input>
    <img src={tik} onClick={()=>{{dispatch(formdata(phone() && {...data,  phone : {value : datas?.phone==="" ? data.phone.value : datas.phone , isedit : false}}))}}} className='mt-2'></img>
    </div> )

    }  
    {!data.Address.isedit ?
    (<div className='d-flex align'> 
        <p>{"Address : " + data.Address.value}</p> 
        <img src={edit} className='mt-2' onClick={()=>{
                        setdatas((prev)=>({...prev , address : data.Address.value}))
            dispatch(formdata({...data,  Address : {value : data.Address.value , isedit : true}}))}}></img>   </div> )

    :       ( <div className='d-flex align'> 
        <p>Address</p>
    <textarea defaultValue={data.Address.value} onChange={(e)=>{setdatas((prev)=>({...prev ,  address : e.target.value}))}} className='text-center'></textarea>
    <img src={tik} onClick={()=>{{dispatch(formdata(address() && {...data,  Address : {value : datas?.address==="" ? data.Address.value : datas.address, isedit : false}}))}}} className='mt-4'></img>
    </div> )

    }
    <button className='btn butt bg-warning' 
    onClick={()=>{dispatch(formdata({name:{value : "" , isedit : false},email:{value : "" , isedit : false},phone:{value : "" , isedit : false},password:{value : "" , isedit : false}, Address:{value : "" , isedit : false}}))}}>Clear</button>


    </div>
    )

    }
    else{
        <div></div>
    }
}
