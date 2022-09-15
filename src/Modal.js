import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function Modalfun(props) {

    // console.log(props , "props");
  return (
<Modal show={props?.show}>

<Modal.Body>

<div>{"invalid username or password"}</div>
</Modal.Body>
</Modal>  )
}
