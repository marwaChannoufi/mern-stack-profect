import React ,{Component } from 'react'
import {Link} from 'react-router-dom'
import {Card,ListGroup,ListGroupItem,Image} from 'react-bootstrap'
import axios from 'axios'

import { Button} from 'react-bootstrap'

class ListeCourse extends Component{


    constructor(){
        super()

        
        this.state={
            courses:[]
        }

    }
    componentDidMount(){
        axios.get('http://localhost:5000/courses/')
        .then(res => {
          this.setState({
            courses: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
    deleteCourse(id) {
        axios.delete('http://localhost:5000/courses/' + id)
            .then((res) => {
                console.log('course successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render(){
        return(
            <div className="">
                <div className="container">
                        <h1 className="justify-content-center"> list of courses</h1>

                        <div className="row">
                           
                           {this.state.courses.map((el,i)=>


                                    <Card style={{ width: '18rem' }}  key={i}>
                                      
                                      <Card.Body>
                                        <Image src={el.categorie}  style={{ "width": '100%' }}/>
                                        <Card.Title>{el.titel}</Card.Title>
                                        <Card.Text>
                                          {el.description}
                                        </Card.Text>
                                      </Card.Body>
                                    <ListGroup className="list-group-flush">
                                    <a href={el.link}>link  course</a>
                                      <ListGroupItem>{el.date}</ListGroupItem>
                                    </ListGroup>
                                    
                                    <ListGroup className="list-group-flush">
                                      made by {el.teacher}
                                  </ListGroup>
                                    <Card.Body>
                                      <Card.Link >
                                      <Link className="edit-link" to={"/editeCourse/" + el._id}>
                                            Edit
                                        </Link>
                                      </Card.Link>
                                      
                                         <Button size="sm" variant="danger" onClick={this.deleteCourse.bind(this,el._id)}>
                                           <Link  to='/listeCourse'> 
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
export default ListeCourse ;