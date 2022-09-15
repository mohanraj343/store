import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { UserContext } from './App';
import { getCookie } from './utility';


const cookie = new Cookies()
// export default function LoginPrivate({Children}) {
//   const stat = useContext(UserContext)

 
// console.log(JSON.parse(getCookie("data")) ,"stat");

// // else{
// //   // console.log(props.datas , "===>privateelse");

// //   return Children
// // }

  
// }

// export function DashboardPrivate({Children}){
//   const stat = useContext(UserContext)
// console.log(stat,"==st");


// }


export default function Test ({children}) {
  const stat = useContext(UserContext)
  // console.log(stat,"====datatest");
  console.log(cookie.get("data"));
  if(cookie.get("data")){
    return(
      <Navigate to='/home'/>
    )
  }
  return children
}

export const Dashboard = ({children}) => {
  const stat = useContext(UserContext)
  console.log(getCookie("data"),"====datadashboard");
  if(!cookie.get("data")){
    return (
      <Navigate to='/login'/>
      )
  
  }
  
  return children
}