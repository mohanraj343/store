import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { updata } from './reactStore/ModalSlice';
import cancel from "./cancel.webp"

export default function Editmodal(props) {

    const dispatch = useDispatch();
    const modaldata = useSelector(state=>state.modalreducer)

    const formik = useFormik({
        initialValues: {
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        },
    
        validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2, "must be atleast 2 characters")
            .max(12, " must be 15 character or less").required("*Required")
            ,
        email: Yup.string().email("Invalid email address").required("*Required")
        ,
        phone: Yup.string().matches(
            /^[6,7,8,9]{1}\d{9}$/,
            "Invalid Mobile Number"
        ).required("*Required")
        
        ,
        password: Yup.string()
            .min(8, "password must be 8 characters")
            .max(16, "password must be 16 character or less").required("*Required")
        
    
            ,
        address: Yup.string().required("*Required")

        }),
    
    
        onSubmit: (values) => {
        props.handleclose();
        
        
    dispatch(updata({
        name : formik.values.name==="" ? modaldata.name : formik.values.name,
        email : formik.values.email==="" ? modaldata.email : formik.values.email,
        password : formik.values.password==="" ? modaldata.password : formik.values.password,
        phone : formik.values.phone==="" ? modaldata.phone : formik.values.phone,
        address : formik.values.address==="" ? modaldata.address : formik.values.address,
        status : true




    }))

    
        },
    });
    
    
    
return (
    <div>

        <Modal show = {props.show}>
            <Modal.Body>


                <div className='canceldiv'>
                    <img className='cancel'  src={cancel} onClick={props.handleclose}></img>
                </div>
<div className='editmodal'>

<div className='indiv'>
    <label>Name</label> <br></br>
    <input type={'text'} name='name' onChange={formik.handleChange} value={formik.values.name}></input>
    {formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
</div>
<div className='indiv'>
    <label>Email</label> <br></br>
    <input type={'text'} name='email'  onChange={formik.handleChange} value={formik.values.email}></input>    
    {formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}

</div>
<div className='indiv'>
    <label>Password</label><br></br>
    <input type={'text'} name='password'  onChange={formik.handleChange} value={formik.values.password}></input>
    {formik.touched.password && formik.errors.password ? (<div className='error'>{formik.errors.password}</div>) : null}

</div>
<div className='indiv'>
    <label>PhoneNumber</label><br></br>
    <input type={'text'} name='phone'  onChange={formik.handleChange} value={formik.values.phone}></input>
    {formik.touched.phone && formik.errors.phone ? (<div className='error'>{formik.errors.phone}</div>) : null}



</div>
<div className='indiv'>
    <label>Address</label><br></br>
    <textarea type={'text'} name='address'  onChange={formik.handleChange} value={formik.values.address}></textarea>
    {formik.touched.address && formik.errors.address ? (<div className='error'>{formik.errors.address}</div>) : null}

</div>

<div>
    <button className='btn bg-info' type={"submit"} onClick={formik.handleSubmit}>Submit</button>
</div>
</div>

            </Modal.Body>
        </Modal>
    </div>
)
}
