import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
import Front from './front';
import Login from './Login';
import Signup from './Signup';
import Test, { Dashboard } from './private'
import {  createContext, useContext, useState } from 'react';
import About from './about';
import Page from './page';
import Page404 from './Page404';
import Axios from './Axios';
import User1 from './user1';
import Modalfun from './Modal';
import Form from './Form';
import Formdata from './Formdata';
import NewName from './NewName';
import Filteredit from './Filteredit';
import Storee from './Storee';
import Cart from './Cart';
import MyOrders from './MyOrders';
import Whislist from './Whislist';
import { useSelector } from 'react-redux';




export const CartContext = createContext()
export const UserContext = createContext()
export const Duplicat = createContext()
export const SuccessContext = createContext()

// export const Nextcontext =createContext();

export const ShipContext = createContext()


function App() {

  const duplicat = useSelector(state=>state.duplicatereducer.duplicate)
  const product = useSelector(state=>state.productreducer.products)


  const [datas, setdatas] = useState(null)
  const fun =(data)=>{


setdatas(data);

// console.log(datas, "===>datas");



  }

  const [idd , setidd] = useState()

  const duplicate =(arr)=>{
console.log(arr , "arrrr");
    setidd(arr)
  }

  console.log(idd , "idddddddddddd");
  // if(datas!==undefined){

  //   // <Private datas={datas} />


  // }

  // if(datas!==undefined){
  //   // <Private1 datas={datas} />

  // }


  const CartProduct = {

    
 getCartProducts : ()=> {
  const fl = product?.reduce((elem , element)=>{
    duplicat?.map(ele=>{
    if (element?.id === ele){
      console.log(element, "element");
    elem.push(element)
  }
  })
  return elem
  
    },[])
    
    return fl
}
  }

  return (
    <UserContext.Provider value={{
      datas : datas,
      fun : fun
    }}>
    <Duplicat.Provider  value={{
      duplicate : idd,
      dupli : duplicate
    }}>
     
  {/* <Nextcontext.Provider value={datas}> */}

  <CartContext.Provider value={CartProduct}>

<Routes >


{/* <Route path='/'   element={<Front/>}/> */}
<Route path='/login' index element={ <Test> <Login /> </Test>} />
<Route path="/home" element={<Dashboard> <Front /> </Dashboard>}>
<Route path='signup' element={<Signup/>}/>
<Route path='about' element={<About/>}/>
<Route path='/home/:id'  element={<Page/>}/>
{/* <Route path='/home/:id'  element={<Page2 />}/> */}

<Route path='axios' element={<Axios/>}/>
<Route path='axios/:id' element={<User1/>}/>
<Route path='form'  element={<Form />} />
<Route path='formdata' element={<Formdata/>} />
<Route path='newname' element={<NewName />} />
<Route path='filteredit' element={<Filteredit/>} />
<Route path='store' element={<Storee />} />
<Route path='cart' element={<Cart />} />
<Route path='myorders' element={<MyOrders/>} />
<Route path='whislist' element={<Whislist/>} />
</Route>

<Route path='/*' element={<Page404/>}/>


</Routes>
{/* </Nextcontext.Provider> */}
<Modalfun />
</CartContext.Provider>
</Duplicat.Provider>
</UserContext.Provider>
  );
}



export default App;
