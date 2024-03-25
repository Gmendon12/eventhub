import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Signup.css'
import Footer from '../Footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'

function Signup() {

  const[name, setName] = useState('')
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState('')
  const[cpassword, setCpassword] = useState("")
  
  const[sucess, setSucess] = useState()
  const[error, setError] = useState()

  async function Register(){
    if(password === cpassword){
      const user = {
        name,
        email,
        password,
        cpassword
      }
      try {
        const result = await (axios.post('/api/users/register', user )).data
        setSucess(true)
      } catch (error) {
        console.log("error", error)
        setError(true)
      }
    }
    else{
      alert("passwords do not match")
    }
  }


  return (
    <div>

        <div id='login-contents'>

        <div id='login-container'>

        <div id='login-logo'>eventHub</div>

        <div id='login-text'>Create an account</div>

        <Box component="form"
           sx={{
             '& > :not(style)': { width: '45ch' },
            }}
            noValidate
            autoComplete="off">
      <div id='login'>
      <TextField label="Full Name" className='login-input' value={name} onChange={(e)=> setName(e.target.value)} />
      <TextField label="Email address" className='login-input'  value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <TextField label="password" type='password' className='login-input' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <TextField label="Retype password" type='password' className='login-input' value={cpassword} onChange={(e)=> setCpassword(e.target.value)} />
      <button id='login-button' onClick={Register}>Sign up</button>
      </div>  
      
    </Box>

    <div id='other-login-methods'>
        <div id='other-login-text'>Other login methods</div>
        <div id='other-methods-icons'>
            <img src="facebook.png" alt="" height={'35px'} />
            <img src="linkedin.png" alt="" height={'35px'} />
            <img src="google.png" alt="" height={'35px'} />
        </div>
    </div>

    <div>
        Already a Member yet ?
        <Link to='/login' style={{color:'blue', fontSize:'14px', paddingLeft:'5px'}}>login</Link>
    </div>
        </div>

        <div id='signup-content-2'>
            <img src="signup.jpg" id='jump-img' alt="" />
        </div>

        </div>

    <Footer/>

    </div>
  )
}

export default Signup