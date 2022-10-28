import React, { useState } from "react"
import {Button,Form} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../JS/Actions/authActions";
import '../App.css';

export default function RegisterForm (){
const [user,setUser]=useState({
    username:"",
    email:"",
    firstName:"",
    lastName:"",

})
const handleChange = (e) =>{
    setUser({...user, [e.target.name]:e.target.value});
};

const dispatch = useDispatch();

    return (
        
<>
    
    
    <Form id="contact" >
      <header className="head">
        <h2> Sign In</h2>
      </header>
        <Form.Group className="mb-3">
        <Form.Control className="input" type="text" placeholder="@UserName" name="username" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control className="input" type="password" placeholder="Password" name="password" onChange={handleChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Control className="input" type="email" placeholder="name@example.com" name="email" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control className="input" type="text" placeholder="First Name" name="firstname" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control className="input" type="text" placeholder="Last Name" name="lastname" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Button className="button" onClick={()=> {
        dispatch (register(user, dispatch))}} as="input" type="submit" value="Sign In" />
      </Form.Group>
    </Form>
  
 </>       
    )
}

/*<Form>
      <div class="con"/>
      <header class="head-form">
      <h2>Log In</h2>
      <p>login here using your username and password</p>
       </header>
          <br/>
        <div class="field-set">
     
         <span class="input-item">
           <i class="fa fa-user-circle"></i>
         </span>
         <input class="form-input" id="txt-input" type="text" placeholder="@UserName" required/>
         <br></br> 
         </div>  
      <span class="input-item">
        <i class="fa fa-key"></i>
       </span>
      <input class="form-input" type="password" placeholder="Password" id="pwd"  name="password" required/>
     
     <span>
        <i class="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
     </span>
     
      <button class="log-in"> Log In </button>
   
  
   <div class="other">
      <button class="btn submits frgt-pass">Forgot Password</button>
      <button class="btn submits sign-up">Sign Up 
      <i class="fa fa-user-plus" aria-hidden="true"></i>
      </button>
   </div>
  </Form>*/