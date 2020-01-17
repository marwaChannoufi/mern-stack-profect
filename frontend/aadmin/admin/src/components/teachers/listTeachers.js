import React ,{Component } from 'react'
import {Link} from 'react-router-dom'
import {Card,ListGroup} from 'react-bootstrap'
import axios from 'axios'

import { Button} from 'react-bootstrap'

class ListTeacher extends Component{


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

    deleteTeacher(id) {
        axios.delete('http://localhost:5000/teachers/delete_teacher/' + id)
            .then((res) => {
                console.log('teacher successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render(){
        return(
            <div className="">
                <div className="container">
                        <h1 className="justify-content-center"> list of teachers</h1>

                        <div className="row">
                           
                           {this.state.teachers.map((el,i)=>


                          <Card style={{ width: '18rem' }} key={i}>
                                                                
                          <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text>
                              {el.description}
                            </Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                          <a href={el.link}>link  teachers</a>
                          </ListGroup>
                          <ListGroup className="list-group-flush">
                          {el.email}
                          </ListGroup>
                          <Card.Body>
                          <Card.Link >
                          <Link className="edit-link" to={"/editTeacher/" + el._id}>
                                Edit
                          </Link>
                          </Card.Link>

                            <Button size="sm" variant="danger" onClick={this.deleteTeacher.bind(this,el._id)}>
                              <Link  to='/listTeacher'> 
                                Delete
                                </Link>
                              </Button> 

                          </Card.Body>
                          </Card>
                          
                           )}
                        </div>
                </div>
            </div>
        )
    }
}
export default ListTeacher ;