import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import User1 from './user1';



export default function Axios() {

    const baseurl = 'https://reqres.in/';
    const request = axios.create({
        baseURL : baseurl
    })

    const [data1 , setdata1] =useState();

    useEffect(()=>{
        
request.get('/api/users?page=1')

.then((response) =>{
  // handle success
setdata1(response.data.data)
})
.catch((error)=> {
  // handle error
console.log(error);
})

    })

    return (
        <div className='row'>{data1?.map((ele , index )=>{
        
            // console.log(ele);
            return   <div key={index}  className={`col-lg-3 div${index}`} >
                
                <p className='p1'>{ele?.first_name}</p>
                <p className='p2 pb-3'>{ele?.email}</p>
            <Link to={`/home/axios/${ele.id}`}> <img className={`img img${index}`} src={ele?.avatar}></img></Link>

            </div>

        })}</div>


)


}
    


