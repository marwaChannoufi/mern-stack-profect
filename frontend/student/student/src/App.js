import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navbar from './components/navbar'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import Profile from './components/profile'
import Mentor from './components/mentor'
import Courses from './components/courses'

class App extends Component {
  render(){
    return (
    <div >
       <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/mentor" component={Mentor} />
          
          <Route exact path="/courses" component={Courses} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile}  />
          </div>
        </div>
      </Router>
    </div>
  );
}
  
}

export default App;
