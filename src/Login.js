
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import logo from './log.webp'
import Cookies from 'universal-cookie'
import { UserContext } from './App'
import setCookie from './utility'
import axios from 'axios'
import Modalfun from './Modal'
import { findAllByAltText } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import { storedata, storeemail, storeuser } from './reactStore/loginSlice'



// export function Axios (){
//     const baseurl = 'https://reqres.in/';
//     const request = axios.create({
//         baseURL : baseurl
//     })


//     const [data1 , setdata1] =useState();

//     useEffect(()=>{
          
// request.get('/api/users?page=2')
  
// .then(function (response) {
//   // handle success
//   setdata1(response.data.data)
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })

//     })
  
// }

export default function Login() {

  const dispatch = useDispatch()

    const baseurl = 'https://reqres.in/';
    const request = axios.create({
        baseURL : baseurl
    })

    const [data1 , setdata1] =useState();

    useEffect(()=>{
          
request.get('/api/users?page=2')
  
.then(function (response) {
  // handle success
  setdata1(response.data.data)
})
.catch(function (error) {
  // handle error
  console.log(error);
})

    })

    useEffect(() => {
      
    console.log(data1);
    
    }, [])

    data1?.map((element , index)=>{

    const cookie = new Cookies();
    cookie.set(`user${element?.id}` , JSON.stringify(element))
    })
    

    let navigate = useNavigate();
let location = useLocation()
let params = useParams()
// console.log(params, "params");
// console.log(location.pathname,"====location");
  
const [data, setdata] =useState(null);



const log = useContext(UserContext)
// console.log(log,"==log");




    const cookie = new Cookies();
    const cook = cookie.getAll();

  const a = (Object.values(cook).map(element=>{

    return  element
  }))
//   const b = (Object.values(cook).map(element=>{

//     return  element?.email
//   }))

  useEffect(()=>{

(a.map(ele=>{

        // console.log(ele);
        return ele}));
  },[])
  const [state , setstate] = useState();
  const handleClose = () => setstate(false);


const formik =useFormik({

    initialValues: {

        username : '',
        email : ''
    },



validationSchema : Yup.object().shape({

    username : Yup.string().required("*Required").max(15, "must be 15 characters or less")
    
    // .test("aa" , "invalid username" , ((value , erroctx)=>{
    //     a?.map(ele=>{

    //        if(ele === formik.values.username){
    //         console.log(ele , "in");
    //         return true;
    //        } 
    //        else{
    //        erroctx.createError({
    //         message : "invalid username"
    //        })
    //        }
    //     })
  
    // }))
    ,
    email : Yup.string().email("*Enter a Valid Email").required("*Required")
    
    // .test("cc" , "invalid email" , ((value , erroctx)=>{
    //     b?.map(ele=>{

    //        if(ele === formik.values.email){
    //         console.log(ele , "in");

    //         return true;
    //        } 
    //        else{
    //        erroctx.createError({
    //         message : "invalid email"
    //        })
    //        }
    //     })
  
    // }))

}),



onSubmit : values=>{


//    console.log("fytftyftyf");



// console.log("test");
// log.fun(formik.values)


// if(values.username === a[0]  && values.email === b[0] || 
//     values.username=== a[1] && values.email === b[1] || 
//     values.username=== a[2] && values.email === b[2] || 
//     values.username=== a[3] && values.email === b[3] || 
//     values.username=== a[4] && values.email === b[4] || 
//     values.username=== a[5] && values.email === b[5])

if(a.find(ele=>ele.first_name === values.username && ele.email === values.email))
    {
      setdata(
        prev => ({...prev}, {'name': formik.values.username,
        'email' : formik.values.email})
      )

      // dispatch(storeemail(formik.values.email))
      // dispatch(storeuser(formik.values.username))

      dispatch (storedata({email : formik.values.email, username:formik.values.username}))
      const cookie = new Cookies();

      cookie.set("data",JSON.stringify(a.find(ele=>ele.first_name === values.username && ele.email === values.email)))
      navigate("/home")

}
else{
    // alert("invalid username or password")
    setstate(true)
  

}
// setCookie("data",JSON.stringify(formik.values),7)
// console.log(cookie.get("data")
// );


    // navigate("/private")
    // navigate(`/invoices/${123}`,{state:"test"})


    
}


})



  return (
<div className='all'>
    <div className='image'>
        <img src={logo}></img>
    </div>
        <div className='Login'>

            <label>UserName</label> <br></br>
            <input type={"text"} placeholder={"name"} name="username" onChange={formik.handleChange} value={formik.values.username}></input><br></br>
            {formik.touched.username&&formik.errors.username ? (<div className='error'>{formik.errors.username}</div>) : null}
            <label>Email</label><br></br>
            <input type={"email"} placeholder={"john@ac"}  name= "email" onChange={formik.handleChange} value={formik.values.email}></input><br></br>
            {formik.touched.email&&formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}
            <div className='display'>
<button type={"submit"} onClick={formik.handleSubmit}>Login</button> 
 {/* <Link to='/signup'><p>new user</p></Link> */}
 {/* <Link to='/invoices/8000'>Link</Link> */}

        </div>

        </div> 
        <Modalfun show={state} handleClose={handleClose}/>
        </div>
        )
}
