import React from 'react'
import Modal from 'react-bootstrap/Modal'
import order from './success.gif'
import cancel from './cancel.webp'
import { Duplicat } from './App'
import { useDispatch, useSelector } from 'react-redux'
import { reducedata } from './reactStore/DuplicateSlice'
import { addstat } from './MyorderStatSlice'

export default function Successfull(props) {
    const duplicate = useSelector(state=>state.duplicatereducer.duplicate)

    // console.log(stat , "stat");

  return (
    <div>
        <Modal show={props?.show}>
<Modal.Body>

 
    <div className='d-flex align-items-center justify-content-center gifdiv'>
<img className='giff' src={order}></img>

<h5 className='text-muted successtext'>{"Order Placed Successfully"}</h5>
    </div>
    <div className='d-flex align-items-center justify-content-center py-2'>
    <button className='btn bg-warning' onClick={()=>{props?.close();
    // window.location.reload()
}}>OK</button>
    </div> 
</Modal.Body>
        </Modal>
    </div>
  )
}
