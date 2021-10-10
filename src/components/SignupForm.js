import React from 'react'
import {Form,Button,Row,Col} from "react-bootstrap";

class SignupForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            firstname : "",
            lastname : "",
            email : "",
            username: "",
            password : "",
            confirmpassword : ""            
        }

        this.onSubmit=this.onSubmit.bind(this);
    }


        
    onSubmit(){
        console.log(this.state);
    }

    render(){
        return (
            <div className="jumbotron">
              <Row>    
              <Col  md={{span : 3}} xs={{ span: 6 }} sm={{ span: 4 }} xl={{ span: 4 }}>                
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={(e)=>this.setState({firstname : e.target.value})}
                    />
                </Form.Group>
   
                
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={(e)=>this.setState({lastname:e.target.value})}
                        
                    />
                </Form.Group>
            
    
                <Form.Group>
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        placeholder="Email ID"
                        name="email"
                        value={this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value})}
                        
                    />
                </Form.Group>
            </Col>            
    
            <Col  md={{span : 3}} xs={{ span: 6 }} sm={{ span: 4 }} xl={{ span: 4 }}>                
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        placeholder="UserName"
                        name="username"
                        value={this.state.username}
                        onChange={(e)=>this.setState({username:e.target.value})}
                        
                    />
                </Form.Group>

                
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={(e)=>this.setState({password:e.target.value})}
                        
                    />
                </Form.Group>

                
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        autoFocus
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        value={this.state.confirmpassword}
                        onChange={(e)=>this.setState({confirmpassword:e.target.value})}
                        
                    />
                </Form.Group>
            </Col>
            </Row>             
           
         <Button onClick={this.onSubmit}>Submit</Button> 
    </div>
   
             )
        }

    }

export default SignupForm
