import React, { useState } from "react" ;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/Actions/authActions";



export default function Login (){

  const navigate=useNavigate()
  
        const [user,setUser]=useState({
            email:"",
            password:"",
        
        })
        const handleChange = (e) =>{
            setUser({...user, [e.target.name]:e.target.value});
        };
        
        const dispatch = useDispatch();
        const errors = useSelector((state)=> state.authReducer.errors)
    return(
        <>
        <Form>
        <header className="head">
        <h2> Log In</h2>
        <p>Login here using your Email and Password</p>
      </header>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className="input" type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className="input" type="password" placeholder="Password" name="password" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {errors}
      <Button className="button" onClick={(e)=> {
        e.preventDefault();
        dispatch (login(user,navigate, dispatch))}} variant="primary" type="submit">
        Submit
      </Button>
      <button className="button frgt-pass"> Forgot Password </button>
    </Form>
        </>
    )
}



