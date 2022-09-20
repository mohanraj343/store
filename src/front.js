import React, { useState } from 'react'
import logo1 from './logo.png'
import { Link, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useSelector } from 'react-redux'
import Successfull from './Successfull'



export default function Front() {
  const stat = useSelector(state=>state.myorderstatreducer.stat)

  const userdata = useSelector(sta=>sta.loginreducer)
  console.log(userdata, " userdataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    const cookie = new Cookies();
    let data = cookie.get("data")


    const formdata = useSelector(state=>state.formreducer)
    console.log(formdata , "formdata");

    console.log(data , "data  front");


  return (
<div className="App">
    
    <div className='header row text-center'>
    
    
      <div className='col-lg-9 d-flex'>
<div className='justify-content-start ps-5'>
        <img  src={logo1}></img></div>
        <div className='d-flex m-auto'>
        <h4 className='px-5 titles HomeTitle'>Home</h4>
        <h4 className='px-5 titles'>Contact</h4>
        <h4 className='px-5 titles'>Career</h4>
        <h4 className='px-5 titles'>Academic</h4>
        </div>

      </div>


      <div className='col-lg-3 d-flex'>


      <img src={data.avatar}  className='user img-fluid'></img>
      <div className='user_details'>
    <p>{"User : " + data.first_name}</p>
    <p>{"Email : " + data.email}</p>
    <button className='btn' onClick={()=>{cookie.remove("data");
  window.location.reload() }}>logout</button>
      </div>
      </div>
    </div>
    
    <div className='body row'>
      <div className='sidebar col-lg-3 text-center' >
      <h3>sidebar</h3>
    
      <Link to='/home/signup'><div className='row d-flex justify-content-center py-2 sidebars' onClick={(e)=>{e.currentTarget.style.backgroundColor='bisque'}}>Signup</div>
</Link>
      <Link to='/home/about'><div className='row d-flex justify-content-center py-2 sidebars'>About</div>
</Link>
<Link to='/home/axios'><div className='row d-flex justify-content-center py-2 sidebars'>Axios</div>
</Link>
<Link to='/home/form'><div className='row d-flex justify-content-center py-2 sidebars'>Form</div>
</Link>
{
  (formdata.Address.value!=="" && formdata.name.value!=="" && formdata.email.value!=="" && formdata.password.value!=="" && formdata.phone.value!=="") && 
    <Link to='/home/formdata'><div className='row d-flex justify-content-center py-2 sidebars'>Formdata</div>
    </Link>

  }
  <Link to='/home/newname'><div className='row d-flex justify-content-center py-2 sidebars'>NewName</div></Link>
  <Link to='/home/filteredit'><div className='row d-flex justify-content-center py-2 sidebars'>Filteredit</div></Link>
  <Link to='/home/store'><div className='row d-flex justify-content-center  py-2 sidebars' onClick={(e)=>{e.currentTarget.style.backgroundColor='bisque'}}>Store</div></Link>
  <Link to='/home/cart'><div className='row d-flex justify-content-center py-2 sidebars'>Cart</div></Link>
{stat && <Link to='/home/myorders'><div className='row d-flex justify-content-center py-2 sidebars'>MyOrders</div></Link>
}
<Link to='/home/whislist'><div className='row d-flex justify-content-center py-2 sidebars'>Whislist</div></Link>




  </div>

      
        <div className='outlet col-lg-9 text-center'> 
        <Outlet />
    
         {/* <h3>outlet</h3> */}
        
        </div> 
        
    
        
    
      
    </div>
    
    <div className='footer row text-center'>
    
    <p className='pt-3 text-dark'>Copyright @ Senthalan Technologies Services</p>
    
    </div>

        </div>  )
}
