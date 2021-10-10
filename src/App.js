import React from 'react';
import Header from './components/Header/Header.js';
import {BrowserRouter as Router , Link ,Route,Switch} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login.js';
import SignupForm from './components/SignUpPage/SignupForm.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Header/>  
            <Home/>
          </Route>

          <Route exact path="/login">
            <Header/> 
            <Login/>
          </Route>
          
          <Route path="/signup">
            <Header/>
            <SignupForm/>
          </Route>
          
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
          
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
