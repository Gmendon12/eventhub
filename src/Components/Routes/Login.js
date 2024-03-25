import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login.css'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>

        <div id='login-contents'>

        <div id='login-container'>

        <div id='login-logo'>eventHub</div>

        <div id='login-text'>Log in</div>

        <Box component="form"
           sx={{
             '& > :not(style)': { width: '50ch' },
            }}
            noValidate
            autoComplete="off">
      <div id='login'>
      <TextField label="Email address" className='login-input'  />
      <TextField label="Password" className='login-input'  />
      <button id='login-button'>Log in</button>
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
        Not a Member yet ?
        <Link to='/signup' style={{color:'blue', paddingLeft:'5px', fontSize:'14px'}}>Signup</Link>
    </div>
        </div>

        <div style={{position:'relative'}} id='login-img'>
            <Link to='/' style={{color:'#FFFFFF'}}><span class="material-symbols-outlined cancel">cancel</span></Link>
            <img src="login.jpg" id='jump-img' alt="" />
        </div>

        </div>

    <Footer/>

    </div>
  )
}

export default Login