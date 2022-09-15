import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from './Axios';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function User1() {



  const userdata = useSelector(state=>state.loginreducer)

  useEffect(()=>{

  console.log(userdata, "usrrrrjhklrrdrsjddddddddhjjjjggggggggggggggggggggggggggggggggggggggg");

  },[])
const params = useParams();

// console.log(params);

const id = parseInt(params.id)

        const baseurl = 'https://reqres.in/';
        const request = axios.create({
            baseURL : baseurl
        })
    
        const [data1 , setdata1] =useState();
    
        useEffect(()=>{
            
    request.get(`/api/users/${id}`)
      
    .then( (response)=> {
      // handle success
      setdata1(response.data.data)
    })
    .catch( (error) =>{
      // handle error
      console.log(error);
    })
    
        })
    //   console.log(data1);
    

      if(data1){

        return(


          <div>
                    <p className='link'>{"firstname : " + data1?.first_name}</p>
                    <p className='link'>{"latsname : " + data1?.last_name}</p>
                    <img src={data1?.avatar}></img>
    
                </div>
                
                )  

      }
    

    }
  
    