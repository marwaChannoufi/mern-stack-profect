import React ,{Component} from 'react'

import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';


class EditCourse extends Component{


    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this)
    
        // State
        this.state={
          titel :'',
          description:'',
          categorie :'',
          link :'',
          date:''
          

  }
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/courses/edit_course/'+ this.props.match.params.id)
          .then(res => {
            this.setState({
              titel :'',
              description:res.data.titel,
              categorie :res.data.categorie,
              link :res.data.link,
              date:res.data.date
             
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
    
    
    onChange(e){
         
        this.setState({
            [e.target.name]:e.target.value
        })
    }
      onSubmit(e) {
      //  e.preventDefault()
    
        const courseObject = {
          titel :this.state.titel,
          description:this.state.description,
          categorie :this.state.categorie,
          link :this.state.link,
          date:this.state.date
        };


        axios.put('http://localhost:5000/courses/update_course/'+ this.props.match.params.id, courseObject)
        .then((res) => {
          console.log(res.data)
          console.log('course successfully updated')
        }).catch((error) => {
          console.log(error)
        })
  
      // Redirect to Student List 
      this.props.history.push('/listeCourse')
    }
    render(){
        return(
            <div>
                <h1>Update the old course </h1>


                <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="titel">
                        <Form.Label>Titel Course</Form.Label>
                        <Form.Control 
                            name='titel'
                            type="text"
                            onChange={this.onChange}
                            value={this.state.titel}
                            

                            
                        />
                        </Form.Group>

                        <Form.Group controlId="description">
                        <Form.Label>description</Form.Label>
                        <Form.Control
                            name='description'
                            type="text"
                            onChange={this.onChange}
                            value={this.state.description}
                        />
                        </Form.Group>

                        <Form.Group controlId="link" >
                        <Form.Label>link</Form.Label>
                        <Form.Control 
                            name="link"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.link}
                        />
                        </Form.Group>
                        
                        <Form.Group controlId="categorie">
                        <Form.Label>categorie</Form.Label>
                        <Form.Control 
                            name='categorie'
                            type="text"
                            onChange={this.onChange}
                            value={this.state.categorie}
                        />
                        </Form.Group>
                        <Form.Group controlId="date">
                        <Form.Label>date</Form.Label>
                        <Form.Control 
                            name='date'
                            type="date"
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                        </Form.Group>
              


              

              <Button variant="danger" size="lg" block="block" type="submit">
                Update Student
              </Button>
      </Form>
            </div>
        )
    }
}
export default EditCourse ;