import * as React from 'react';
import { Formik ,useFormik} from 'formik';
import * as yup from "yup"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast, ToastContainer } from 'react-toastify';
import Card from '@mui/material/Card';
import {  useNavigate } from 'react-router-dom';

// karthigaR21@gmail.com karthigaR21@gmail.com


const formValidationOnSchema = new yup.object({
  email:yup.string().required().email().matches(/^(?!.*@[^,]*,)/,"Please type a valid email"),
  password: yup.string()
  .required('Please Enter your password').matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol')
})

export function Logins() {
  const navigate = useNavigate();

  const {handleSubmit, values, handleBlur, handleChange, touched, errors} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationOnSchema,
    onSubmit: (loginUser) => {
      addList(loginUser)
    }
  })
  const addList = (loginUser) => {
    fetch(`http://localhost:5000/auth/login`, {
      method:"POST",
      body: JSON.stringify(loginUser),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer" + localStorage.getItem("token")}
    })
    .then((data) => data.json())
    // .then(() => navigate(`/products`))
    .then((data) => {console.log(data.token)
    if(data) {
      localStorage.getItem("Authorization", data.token)
      navigate(`/products`)
      if(data.token === "Successful login") {
      } else {
        console.log("err");
      }
    }})
    .catch((err) => console.log(err))
  }

  return (
    <Card sx={{backgroundColor:"whitesmoke"}} className='auth-container'>
      <form onSubmit={handleSubmit} className='auth-form'>
        <h2>LOGIN</h2>

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
          L<span>ogin</span>
        </Button>
        
        {/* <Link className='auth-link' to="/users/signup">Create new account</Link> */}
      </form>
      <ToastContainer />
    </Card>
  );
}

