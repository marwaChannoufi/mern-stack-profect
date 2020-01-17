import React, { Component } from 'react'
import { register } from './studentFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error_firstName:'',
      error_lastName:'',
      error_email:'',
      error_password:''
  }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  // form validation 
// valider=()=>{
//   let error_firstName ='';
//   let error_lastName ='';
//   let error_email ='';
//   let error_password =''

//   if(!this.state.email.includes('@')){
//     error_email='invalid email'
//   }
//   if(!this.state.firstName){
//     error_firstName='name must be blank'
//   }
//   if(!this.state.lastName){
//     error_lastName='field must be blank'
//   }
//   if(!this.state.password){
//     error_password='password must be blank'
//   }
// if(error_email || error_firstName || error_lastName || error_password){
//   this.setState({error_email,error_firstName,error_lastName,error_password})
//   return false
// }
// return true

// }

  onSubmit(e) {
    e.preventDefault()

      // const isValid=this.valider()
      
        const newStudent = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
   }

    register(newStudent).then(res => {
      this.props.history.push(`/login`)
    })
    // if (isValid){   }
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto jumbotron ">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
                  <div className="text-danger ">{this.state.error_firstName}</div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter your lastname name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
                <div className="text-danger ">{this.state.error_lastName}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <div className="text-danger ">{this.state.error_email}</div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <div className="text-danger ">{this.state.error_password}</div>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register