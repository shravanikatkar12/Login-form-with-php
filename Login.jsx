import React, { useState } from "react";
import './Login.css';
import axios from "axios";
const Login=()=>{
   
        const [user,setUser]=useState({email:"",password:""});
    
     let name,value;
     const handle=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user, [name]:value})
     }
        const submitForm=async(e)=>{
            e.preventDefault();
            const sendData={
                email:user.email,
                password:user.password
            }
            axios.post('http://localhost/phpreact/insert.php', sendData)
            /*.then((result)=>{
                if(result.user.status==='invalid')
                alert("invalid user");
            })*/
        }
  return(
  <>
    <h1>Login Form</h1>
    <form onSubmit={submitForm}>
    <div className="container">
    <p>Email:</p>
    <input type="text" name="email" value={user.email} onChange={handle}/>
    <p>Password</p>
    <input type="text" name="password" value={user.password} onChange={handle}/><br/>
    <button type="submit" value="Login">Submit</button>
    </div>
    </form>
    </>
  );
}
export default Login;