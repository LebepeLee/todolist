import React, { useState } from 'react'
import './Todo.css';
import { useHistory } from 'react-router-dom';

export default function Login (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const Login = (()=>{
        history.push('/todoApp')
    })
    return(
            <div className='main'>
        <div className='container'>
            <h1>Login</h1>
            <input type='email' placeholder='Enter your email' /><br></br>
            <input type='password' placeholder='Enter your email' /><br></br>
            <button className='btn-login' onClick={Login}>Login</button>
        </div>
        </div>
    )
}