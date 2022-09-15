// import { useFormik } from 'formik'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

export default function FilterModal(props) {

const [vall ,setvall] = useState()
const [filtervalue , setfiltervalue] = useState({})
// const formik = useFormik({

//     initialValues : {
//         orderid : "",
//         mincount : "",
//         maxcount : ""
//     },

//     onSubmit : values =>{

//     }
// })


console.log(filtervalue , "filtervalue");
  
  return (
    <div>

        <Modal show={props.show}>
            <Modal.Body>
<div>
<label>Order Id : &nbsp;</label>
<input type={'text'} onChange={(e)=>{setfiltervalue({...filtervalue , id : e.target.value})}}></input> <br></br>
<br></br>

<label for="customRange3" class="form-label">MinQuantity Range</label> <br></br>
<input type="range" class="form-range" defaultValue={0}  min="0" max="30" step="1" id="customRange3" onChange={(e)=>{setfiltervalue({...filtervalue , min : e.target.value})}}></input>
<p>{filtervalue?.min}</p>


<label for="customRange3" class="form-label">MaxQuantity Range</label>
<input type="range" class="form-range" defaultValue={30} min="0" max="30" step="1" id="customRange3" onChange={(e)=>{setfiltervalue({...filtervalue , max : e.target.value})}}></input>
<p>{filtervalue?.max}</p>


<button onClick={()=>{
    
    console.log(filtervalue?.id,filtervalue?.min,filtervalue?.max , "valuessssssssssssssfgf");
    props?.filterfun(filtervalue.id,filtervalue.min,filtervalue.max)
    setfiltervalue({})
    
    }}>Submit</button>

</div>
            </Modal.Body>
        </Modal>
    </div>
)
}
