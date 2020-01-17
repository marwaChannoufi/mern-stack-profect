import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


import {Card,ListGroup,ListGroupItem,Image} from 'react-bootstrap'

class Courses extends Component {
  constructor(){
    super()
    this.state={
       teachers:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/teachers/')
        .then(res => {
          this.setState({
            teachers: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5"></div> 
        <div className="d-flex">
        
          {this.state.teachers.map((el,i)=>
             <div className="jumbotron " style={{"margin":"10px"}} key={i}> 
                
                <Card style={{ width: '18rem' }} key={i}>
                                                                
                          <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text>
                              {el.description}
                            </Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                              {(localStorage.getItem('studenttoken')?
                              (<a href={el.link}>link  to git hub {el.name}</a>):
                              (<Link to ='/register'> link  to git hub {el.name}</Link>))}

          
                          </ListGroup>
                          <ListGroup className="list-group-flush">
                          {el.email}
                          </ListGroup>
                          
                          </Card>
                </div>
  
            )}
            </div>
           </div>
          
         
        
      
    )
  }
}

export default Courses;