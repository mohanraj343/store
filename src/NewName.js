import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sameAs } from './reactStore/SimiliarSlice'

export default function NewName() {


    const dispatch = useDispatch()
    const newname = useSelector(state=>state.similiarreducer)
// const [state , setstate] = useState("")


// console.log((newname.name));
// useEffect(()=>{

    // dispatch(sameAs(state))

// },[state])
  return (
    <div>

        <h5>Name  </h5> <br></br>
        <input type={"text"}  value={newname.name} onChange={(e)=>{dispatch(sameAs(e.target.value))}} className='inputName p-2'></input>
        <input  type={"text"} value={newname.name} onChange={(e)=>{dispatch(sameAs(e.target.value))}}  className='inputName mx-1 p-2'></input>

    </div>
  )


  }



// const [data, setData] = useState({
//     name: '',
//     email: ''
//   })

//   const [value, setValue] = useState('')

//   const handleSubmit = () => {
//     setValue(data)
//   }

//   const handleClick = (event) => {
//     const { name, value } = event.target
//     const newState = { ...data }
//     newState[name] = value
//     setData(newState)
//   }

//   return (

//     <header className="App-header">
//       <div className='all'>
//         <div className='image'>
//           <img src={logo}></img>
//         </div>
//         <div className='Login'>
//          {/* {value.length ?( <> */}
//          <form>
//             <label>UserName</label> <br></br>
//             <input type={"text"} placeholder={"name"} name="name" onChange={handleClick} ></input><br></br>
//             <label>Email</label><br></br>
//             <input type={"email"} placeholder={"john@ac"} name="email" onChange={handleClick}></input><br></br>
//             <button type={"submit"} onClick={handleSubmit} >Login</button>
//        <First data={value}/>     
// </form>
        

//         </div>

//       </div>