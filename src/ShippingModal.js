import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import cancel from './cancel.webp'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { addressdata } from './reactStore/AddressSlice';
import PreviewModal from './PreviewModal';
import { ShipContext } from './App';


export default function ShippingModal(props) {
  const ship = useContext(ShipContext)

const dispatch = useDispatch();
const [previeww , setprevieww] = useState()
const close =()=> {setprevieww(false)}
const Adresdata = useSelector(state=>state.addressreducer)
// const [shippingdata , setshippingdata] = useState({})
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      pincode: "",

    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "must be atleast 2 characters")
        .max(12, " must be 15 character or less").required("*Required") ,
      email: Yup.string().email("Invalid email address").required("*Required"),
      phone: Yup.string().matches(
        /^[6,7,8,9]{1}\d{9}$/,
        "Invalid Mobile Number").required("*Required"),
      pincode: Yup.string()
        .min(6, "pincode must be 6 numbers")
        .max(6, "pincode must be 6 numbers").required("*Required").matches(/^[0-9]{6}$/  , "Invalid Pincode"),
      address: Yup.string().required("*Required"),
    }),


    onSubmit: (values) => {

              
        // setshippingdata((prev)=> ({...prev ,address : formik.values.address , pincode : formik.values.pincode }))

        // dispatch(addressdata({...Adresdata ,name : formik.values.name , email : formik.values.email , phone : formik.values.phone , address : formik.values.address , pincode: formik.values.pincode}))


        console.log("onsumit");
      props.onSubmitAddress({name : formik.values.name , email : formik.values.email , phone : formik.values.phone , address : formik.values.address , pincode: formik.values.pincode})

  },
}); 


  return (
    <div>
    <Modal show={props.show} >
        <Modal.Body>
        <div className='canceldiv'>
    <img className='cancel' src={cancel} onClick={props.handleclose}></img>
    </div> 

    <div className='d-flex Shipping justify-content-center align-items-center'>
        <h4>{"Billing Address"}</h4>
        <div className="d-flex formm ">
      <div className="my-2 fom1">
        <label>Name </label>
        <br></br>
        <input
          type={"text"}
          onChange={formik.handleChange}
          name="name"
          placeholder={"name"}
          value={formik.values.name}
        ></input>
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="my-2 fom1">
        <label>Email </label> <br></br>
        <input
          type={"email"}
          onChange={formik.handleChange}
          name="email"
          placeholder={"Email"}
          value={formik.values.email}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}{" "}
      </div>
      <div className="my-2 fom1">
        <label>Phone Number </label>
        <br></br>
        <input
          type={"text"}
          onChange={formik.handleChange}
          name="phone"
          placeholder={"PhoneNumber"}
          value={formik.values.phone}
        ></input>
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}{" "}
      </div>

      <div className="my-2 fom1">
        <label>Address </label>
        <br></br>
        <textarea
          type={"text"}
          onChange={formik.handleChange}
          name="address"
          placeholder={"Address"}
          value={formik.values.address}
        ></textarea>
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}{" "}
      </div>

      <div className="my-2 fom1">
        <label>Pincode </label>
        <br></br>
        <input
          type={"text"}
          onChange={formik.handleChange}
          name="pincode"
          placeholder={"pincode"}
          value={formik.values.pincode}
        ></input>
        {formik.touched.pincode && formik.errors.pincode ? (
          <div className="error">{formik.errors.pincode}</div>
        ) : null}{" "}
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <button
          type={"reset"}
          onClick={()=>{
            formik.handleSubmit()}}
          className="btn  butt "
        >
          Submit
        </button>
      </div>
    </div>
    </div>
        </Modal.Body>
    </Modal>
    </div>
)
}
