import React from 'react'
import {Form,Button,Row,Col} from "react-bootstrap";
import "./SignupForm.css";

class SignupForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            firstname : "",
            lastname : "",
            email : "",
            username: "",
            password : "",
            confirmpassword : "",
            errors: {    
                   firstname : "",
                   lastname : "",
                   email : "",
                   username: "",
                   password : "",
                   confirmpassword : "",
              }            
        }

        this.onSubmit=this.onSubmit.bind(this);
    }


        
    onSubmit(){
        console.log(this.state);
    }

    
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const validNameRegex = RegExp('[A-zÀ-ú\s]+');

        switch (name) {
          case 'firstname': 
            errors.firstname = 
              value.length < 3
                ? 'First Name must be atleast 3 characters long!'
                : '' &&
                validNameRegex.test(value)
                ? ''
                : 'Only Characters are allowed'  ;
            break;
           case 'lastname' :
               errors.lastname=
               value.length < 3
               ? 'Last Name must be atleast 3 characters long!' : '' &&
               validNameRegex.test(value)
               ? ''
               : 'Only Characters are allowed' ;
               break; 
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'username' :
              errors.username = 
              value.length<5
              ?  'Username should be atleast 5 characters long' : '';
              break;  
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be atleast 8 characters long!'
                : '';
            break;
  
          default:
            break;
        }
      
        this.setState({errors, [name]: value}, ()=> {
            
        })
      }




    render(){
        
        const {errors} = this.state;

        return (
            <div className="jumbotron">
              <Row>    
              <Col  md={{span : 3}} xs={{ span: 6 }} sm={{ span: 4 }} xl={{ span: 4 }}>                
                <Form.Group>
                    <Form.Label className="labels">First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={(e)=>this.setState({firstname : e.target.value})}
                        onChange={this.handleChange}
                    />
                    
                        {errors.firstname.length > 0 && 
                        <span className='error'>{errors.firstname}</span>}

                </Form.Group>
   
                
                <Form.Group>
                    <Form.Label className="labels">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={(e)=>this.setState({lastname:e.target.value})}
                        onChange={this.handleChange}
                    />
                    {errors.lastname.length > 0 && 
                        <span className='error'>{errors.lastname}</span>
                        }

                </Form.Group>
            
    
                <Form.Group>
                    <Form.Label className="labels">Email ID</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email ID"
                        name="email"
                        value={this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value})}
                        onChange={this.handleChange}
                    />
                    {errors.email.length > 0 && 
                        <span className='error'>{errors.email}</span>}

                </Form.Group>
            </Col>            
    
            <Col  md={{span : 3}} xs={{ span: 6 }} sm={{ span: 4 }} xl={{ span: 4 }}>                
                <Form.Group>
                    <Form.Label className="labels">Username</Form.Label>
                    <Form.Control                        
                        type="text"
                        placeholder="UserName"
                        name="username"
                        value={this.state.username}
                        onChange={(e)=>this.setState({username:e.target.value})}
                        onChange={this.handleChange}
                    />
                    {errors.username.length > 0 && 
                        <span className='error'>{errors.username}</span>}

                </Form.Group>

                
                <Form.Group>
                    <Form.Label className="labels">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={(e)=>this.setState({password:e.target.value})}
                        onChange={this.handleChange}
                    />
                    {errors.password.length > 0 && 
                        <span className='error'>{errors.password}</span>}

                </Form.Group>

                
                <Form.Group>
                    <Form.Label className="labels">Confirm Password</Form.Label>
                    <Form.Control
                        
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        value={this.state.confirmpassword}
                        onChange={(e)=>this.setState({confirmpassword:e.target.value})}
                        onChange={this.handleChange}
                    />
                    {errors.confirmpassword.length > 0 && 
                        <span className='error'>{errors.confirmpassword}</span>}

                </Form.Group>
            </Col>
            </Row>             
           
         <Button onClick={this.onSubmit}>Submit</Button> 
    </div>
   
             )
        }

    }

export default SignupForm
