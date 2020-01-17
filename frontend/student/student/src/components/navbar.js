import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import  {Button } from 'react-bootstrap'

import jwt_decode from 'jwt-decode'

class Navbar extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     firstName: '',
  //     lastName: ''
  //   }
  // }

  // componentDidMount() {
  //   const token=localStorage.getItem('studenttoken')
    
  //     const decoded = jwt_decode(token)
  //   this.setState({
  //     firstName: decoded.firstName,
  //     lastName: decoded.lastName,
     
  //   })
    
    
  // }



  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('studenttoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Button>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          </Button>
        </li>
        <li className="nav-item">
          <Button>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          </Button>
        </li>
      </ul>
    )

    const studentLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
           {/* {this.state.firstName}  */}
          </Link>
        </li>
        <li className="nav-item">
          <Button onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </Button>
        </li>
      </ul>
    )

    return (
      <div>
      

      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div className="container">
      <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active px-lg-4">
            <Link className="nav-link text-uppercase text-expanded" to='/'>Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item px-lg-4">
            <Link className="nav-link text-uppercase text-expanded" to='/mentor'>mentor</Link>
          </li>
          <li className="nav-item px-lg-4">
            <Link className="nav-link text-uppercase text-expanded" to='/courses'>courses</Link>
          </li>
          {localStorage.getItem('studenttoken') ? studentLink : loginRegLink}
        </ul>
      </div>
    </div>
  </nav>
</div>
      
    )
  }
}

export default withRouter(Navbar)