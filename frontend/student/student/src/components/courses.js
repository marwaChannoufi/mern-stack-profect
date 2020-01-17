import React, { Component ,useState} from 'react'
import axios from 'axios'

import {Card,ListGroup,ListGroupItem,Image} from 'react-bootstrap'


function searchingFor(search){
  return function(x){
    return x.titel.toLowerCase().includes(search.toLowerCase()) || !search
  }
}
class Courses extends Component {
  constructor(){
    super()
    this.state={
       courses:[],
       search:''
    }

    this.searchHandler =this.searchHandler.bind(this)
  }
searchHandler(e){
  this.setState({search:e.target.value})
}
 serachbar=()=>{



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


            
  render() {

    const {search ,courses}=this.state
    return (
      <div className="container">
        {localStorage.getItem('studenttoken')?
        (<div className="jumbotron mt-5">
        <input 
				  className="form-control my-0 py-1 amber-border" 
				  type="text" 
				  placeholder="Search" 
				  aria-label="Search" 
          onChange={this.searchHandler}
          value={search}
			  />
          </div> ):''}
        <div className="d-flex">
        


          {courses.filter(searchingFor(search)).map((el,i)=>
          
             <div  className="jumbotron d-flex  col-md3" style={{"margin":"10px"}}> 
                
                <Card style={{ width: '18rem' }} key={i}>
                                      
                                      <Card.Body >
                                        <Image src={el.categorie} style={{'width':'100%'}}  />
                                        <Card.Title>{el.titel}</Card.Title>
                                        <Card.Text>
                                          {el.description}
                                        </Card.Text>
                                      </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        {localStorage.getItem('studenttoken')?
                                        (<a href={el.link}>go  to {el.titel}</a>):
                                        <p>go to {el.titel}</p>}
                                    <ListGroupItem>{el.date}</ListGroupItem>
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