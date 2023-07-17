import * as React from 'react';
import {useNavigate } from 'react-router-dom';
import { Formik ,useFormik} from 'formik';
import * as yup from "yup"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from "axios"
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import Card from '@mui/material/Card';


const formValidationOnSchema = new yup.object({
  username: yup.string().required().min(8),
  password: yup.string()
  .required('Please Enter your password').matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
  email:yup.string().required().email().matches(/^(?!.*@[^,]*,)/,"Please type a valid email")

})


export function SignUp() {
  const navigate = useNavigate();

  const {handleSubmit, values, handleBlur, handleChange, touched, errors} = useFormik({
    initialValues: {
      username: "",
     
      email: "",
      password: "",
    },
    validationSchema: formValidationOnSchema,
    onSubmit: (newList) => {
      // console.log("User details", newList)
      addUser(newList)
    },
  })
  const addUser = (newList) => {
    fetch(`http://localhost:5000/auth/register`, {
      method:"POST",
      body: JSON.stringify(newList),
      headers: {"Content-Type" : "application/json"}
    })
    .then((data) => data.json())
    .then(() => console.log("logined"),
    navigate(`/users/login`)
    )
  }

  return (
    <Card sx={{backgroundColor:"whitesmoke"}} className='auth-container'>
      <form onSubmit={handleSubmit} className='auth-form'>
        <h2>SIGNUP</h2>

        <TextField
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && errors.username}
          helperText={touched.username && errors.username ? errors.username : null}

          className='textfield-auth'
          // type='text'
          label="User-Name"
          variant="outlined"
        />

       
        <TextField
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          helperText={touched.email && errors.email ? errors.email : null}

          className='textfield-auth'
          // type='text'
          label="e-mail ID"
          variant="outlined"
        />

        <TextField
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          helperText={touched.password && errors.password ? errors.password : null}

          className='textfield-auth'
          type='password'
          label="Password"
          variant="outlined"
        />

        <Button
          type='submit'
          className='button-auth'
          variant="contained"
          // onClick={() => navigate('/products')}
        >
          S<span>ignup</span>
        </Button>

        {/* <Link className='auth-link' to="/users/login">Already have an account</Link> */}
      </form>
      <ToastContainer />
    </Card>
  );
}