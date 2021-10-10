import React,{useState,useEffect} from 'react'
import {Form,Button} from "react-bootstrap";

function Login() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(password);
    }

    const validateForm=()=>{
            return true;
    }

    return (
        <div className="Login">
            <Form className="jumbotron">
            <h2>Login Page</h2>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={(e)=>setPassword(e.target.value)}
              
                    />
                </Form.Group>

                <Button  onClick={onSubmit} disabled={!validateForm()}>Submit</Button>
            
            </Form>
        </div>
    )
}

export default Login
