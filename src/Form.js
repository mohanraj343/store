import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formdata } from "./reactStore/FormSlice";

export default function Form() {
  const dispatch = useDispatch();
  const armdata = useSelector((state) => state.formreducer);
  const [trueo , settrueo] = useState(false)
console.log(armdata);

// const check=()=>{
//  [...armdata].map(ele=>{
// if(ele.value===""){
// settrueo(prev=>prev , true)
// }
//  })

//  if(trueo===true){
//   alert("field cannot be empty")
//  }


// console.log(ele, "eleeeeeeeeeeeeeeeeeee");
// })
// }
const check=(formik)=>{
  if(formik.values.name==="" || formik.values.address==="" || formik.values.email===""|| formik.values.phone==="" || formik.values.password===""){

    if(armdata.name.value==="" || armdata.email.value ===""|| armdata.password.value ==="" || armdata.phone.value===""|| armdata.Address.value===""){

      alert("field cannot be empty")

    }
    else{
      formik.handleSubmit()
      }
  }
  else{
    formik.handleSubmit()
    }
}

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
        .max(12, " must be 15 character or less")
        // .test("ds","name is Required", ((armdata,errorctx)=>{
        //   if(armdata.name.value!==''){
        //     return true
        //   }
        //   else{
        //     errorctx.createError({

        //       message : "*Required"
        //     })
        //   }
        // }))
        ,
      email: Yup.string().email("Invalid email address")
      // .test("ds","email is Required", ((armdata,errorctx)=>{
      //   if(armdata.email.value!==''){
      //     return true
      //   }
      //   else{
      //     errorctx.createError({

      //       message : "*Required"
      //     })
      //   }
      // }))
      ,
      phone: Yup.string().matches(
        /^[6,7,8,9]{1}\d{9}$/,
        "Invalid Mobile Number"
      )
      // .test("ds","phone is Required", ((armdata,errorctx)=>{
      //   if(armdata.phone.value!==''){
      //     return true
      //   }
      //   else{
      //     errorctx.createError({

      //       message : "*Required"
      //     })
      //   }
      // }))
      ,
      password: Yup.string()
        .min(8, "password must be 8 characters")
        .max(16, "password must be 16 character or less")
        // .test("ds","password is Required", ((armdata,errorctx)=>{
        //   if(armdata.password.value!==''){
        //     return true
        //   }
        //   else{
        //     errorctx.createError({

        //       message : "*Required"
        //     })
        //   }
        // }))
        ,
      address: Yup.string()
      // .test("ds","address is Required", ((armdata,errorctx)=>{
      //   if(armdata.Address.value!==''){
      //     return true
      //   }
      //   else{
      //     errorctx.createError({

      //       message : "*Required"
      //     })
      //   }
      // }))
      ,
    }),

    // onSubmit : values=>{
    //     dispatch(formdata({name: formik.values.name , email: formik.values.email, phone: formik.values.phone,
    //     password: formik.values.password, Address : formik.values.address
    //     }))

    //     console.log(values);

    // },

    onSubmit: (values, { resetForm }) => {
      // do your stuff
      console.log("onsumbit===========");

       dispatch(formdata({...armdata , Address : {value : armdata.Address.value , isedit : false}}))
     
      if ( formik.values.name === "" &&
      formik.values.email === "" &&
      formik.values.address ==="" &&
      formik.values.password === "" &&
      formik.values.phone === "" && armdata.Address.value!=="") {

       alert("atleast one field is required");

        
      }
    
    
      dispatch(
        formdata({
          name : {value : formik.values.name !== "" ? formik.values.name : armdata.name.value , isedit: false},
          email:{value : 
            formik.values.email !== "" ? formik.values.email : armdata.email.value , isedit: false}, 
          phone:{value : 
            formik.values.phone !== "" ? formik.values.phone : armdata.phone.value , isedit :false},
          password:{value : 
            formik.values.password !== ""
              ? formik.values.password
              : armdata.password.value , isedit: false},
          Address:{value : 
            formik.values.address !== ""
              ? formik.values.address
              : armdata.Address.value , isedit: false},
        })
      );



      resetForm();
      resetForm();
    },
  });




  return (
    <div className="d-flex formm ">
      <div className="my-2 fom">
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
          <div className="error1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="my-2 fom">
        <label>Email </label> <br></br>
        <input
          type={"email"}
          onChange={formik.handleChange}
          name="email"
          placeholder={"Email"}
          value={formik.values.email}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div className="error1">{formik.errors.email}</div>
        ) : null}{" "}
      </div>

      <div className="my-2 fom">
        <label>Password </label>
        <br></br>
        <input
          type={"text"}
          onChange={formik.handleChange}
          name="password"
          placeholder={"Password"}
          value={formik.values.password}
        ></input>
        {formik.touched.password && formik.errors.password ? (
          <div className="error1">{formik.errors.password}</div>
        ) : null}{" "}
      </div>

      <div className="my-2 fom">
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
          <div className="error1">{formik.errors.phone}</div>
        ) : null}{" "}
      </div>

      <div className="my-2 fom">
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
          <div className="error1">{formik.errors.address}</div>
        ) : null}{" "}
      </div>

      <div>
        <button
          type={"reset"}
          onClick={()=>{
            check(formik)}}
          className="btn  butt"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
