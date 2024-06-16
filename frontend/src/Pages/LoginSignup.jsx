import React, { useState } from 'react'
import './CSS/LoginSignup.css'
function LoginSignup() {
  const [state,setState]=useState("Login")
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value })
  }


  const login=async ()=>{
    console.log("Login fn executed",formData)

    let responseData;
    await fetch("http://localhost:4000/login",{
     method:'POST',
     headers:{
       Accept:'application/form-data',
       'Content-Type':'application/json',
     },
     body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>responseData=data)
    
    if(responseData.success){
     localStorage.setItem('auth-token',responseData.token);
     window.location.replace("/")
    }
    else{
     alert(responseData.error)
    }
  }
  const signup=async ()=>{
    console.log("Sign Up fn executed",formData)
    let responseData;
   await fetch("http://localhost:4000/signup",{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData)
   }).then((res)=>res.json()).then((data)=>responseData=data)
   
   if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/")
   }
   else{
    alert(responseData.error)
   }

  }



  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state} </h1>
        <div className="loginsignup-fields">
       {state ==='Sign Up' ? <input  onChange={changeHandler} name='username' value={formData.username} type="text" placeholder='ur name plis'/>:<></> }
          <input onChange={changeHandler} name='email' value={formData.email} type="email" placeholder='email address' />
          <input  onChange={changeHandler} name='password' value={formData.password}  type="password"  placeholder='ur password now' />

        </div>
        <button onClick={()=>{state==='Sign Up' ? signup() : login() } } >Continue</button>
        {state==='Sign Up'  ?  <p className="loginsignup-login">
          Already have an account? <span onClick={()=>{setState("Login") }} >Login here</span></p> : <p className="loginsignup-login">
          Create an Account ? <span  onClick={()=>{setState("Sign Up") }} >Click here</span></p>
        
          }
       <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>BY continuing, i agree</p>
          </div>
        
      </div>
        
    </div>
  )
}

export default LoginSignup