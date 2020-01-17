import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
// import ToDoTask  from './to-do-task'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.studenttoken
    
      const decoded = jwt_decode(token)
    this.setState({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email
    })
    
    
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.lastName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
          {/* <ToDoTask /> */}
        </div>
        
      </div>
    )
  }
}

export default Profile