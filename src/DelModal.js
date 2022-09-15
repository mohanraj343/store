import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { reducedata } from './reactStore/DuplicateSlice';

export default function DelModal(props) {

    const dispatch = useDispatch()
    const cartproduct = useSelector(state=>state.duplicatereducer.duplicate)

const RemoveCartdata =()=>{
dispatch(reducedata(cartproduct.filter(ele=>ele!==props?.id)))

}
return (
    <div>
        <Modal show={props.show}>
            <Modal.Body>

<div className='py-4'>

<p className='text-center'><b>{"Are You Sure You Want To Remove This Product?"}</b></p>

<div className='d-flex justify-content-end py-2'>
    <button className='me-5' onClick={props.handleclose}>No</button>
    <button className='me-5' onClick={()=>{RemoveCartdata() ; props.handleclose()}}>Yes</button>
</div>
</div>
            </Modal.Body>
        </Modal>
    </div>
)
}
