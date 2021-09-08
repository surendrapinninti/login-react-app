import React from 'react'
// import {Redirect} from 'react-router-dom';
import "./login.css"
import { useState } from "react"
 function LoginForm() {
  const [isemail, setIsEmail] = useState(false);
   const [email, setEmail] = useState();
   const [pass, setPass] = useState();
   const [emailmag, SetEmailMsg] = useState();
   const [passmag, SetPassMsg] = useState();
   const [authmag, SetAuthmsg] = useState();



    function emailcheck(e) {
      SetAuthmsg()
     let useremail=e.target.value
     setEmail(useremail);
     if(useremail!==""){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(useremail))
      {
        SetEmailMsg("valid email")
        setIsEmail(true)
      }else{
        setIsEmail(false)
        SetEmailMsg("Please enter your valid email")
      }
     }else{
      setIsEmail(false)
      SetEmailMsg("Email is required")
     }
    }
    function passcheck(e) {
      SetAuthmsg()
      let userpass=e.target.value
       setPass(userpass);
       if(userpass!==""){
        SetPassMsg("")
       }else{
        SetPassMsg("Password is required")
       }

      
    }
  

    function login() {

      if(email==="test@gmail.com"){
          if(pass==="123456"){
            SetAuthmsg("")
            localStorage.setItem('authtoken','qwertyuiopljhgfsaj');
           
            window.location.href="/"
        } else{
          SetAuthmsg("Incorrect password")
        
        }
      }else{
        SetAuthmsg("Incorrect email id")
      }

      }
    return (
        
            
<div className="container">
  <form method="post" >
    <div className="row heading">
              <h4 className="autherr">{authmag}</h4> 
      <h2 className="">User Login </h2>
      <div className="col">
        <input type="text" name="username" className="input" placeholder="Username" value={email} required onChange={emailcheck} />
        <span className={isemail?"succ":"err"}>{emailmag}  </span>
        <input type="password" name="password" placeholder="Password" value={pass}  required onChange={passcheck} />
        <span className="err">{passmag}</span>
        <button type="button" className="btn" onClick={login} >Login</button> 
      </div>
      
    </div>
  </form>
</div>

    )
}
export default LoginForm;