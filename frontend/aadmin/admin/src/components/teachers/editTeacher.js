import React ,{Component} from 'react'

import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';


class EditTeacher extends Component{


    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this)
    
        // State
        this.state={
            name :'',
            description:'',
            email:'',
            link :''
          

  }
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/courses/edit_teacher/'+ this.props.match.params.id)
          .then(res => {
            this.setState({
                name :res.data.name,
                description:res.data.description,
                email:res.data.email,
                link :res.data.link

              
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
    
        const teacherObject = {
            name :this.state.name,
                description:this.state.description,
                email:this.state.email,
                link :this.state.link

         
        };


        axios.put('http://localhost:5000/teachers/update_teacher/'+ this.props.match.params.id, teacherObject)
        .then((res) => {
          console.log(res.data)
          console.log('teacher successfully updated')
        }).catch((error) => {
          console.log(error)
        })
  
      // Redirect to Student List 
      this.props.history.push('/listTeachers')
    }
    render(){
        return(
            <div>
                <h1>Update the oteacher's information </h1>


                <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="name">
                        <Form.Label>name Course</Form.Label>
                        <Form.Control 
                            name='name'
                            type="text"
                            onChange={this.onChange}
                            value={this.state.name}
                            

                            
                        />
                        </Form.Group>

                        <Form.Group controlId="email">
                        <Form.Label>email</Form.Label>
                        <Form.Control
                            name='email'
                            type="text"
                            onChange={this.onChange}
                            value={this.state.email}
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
                        
                        
                        <Form.Group controlId="description">
                        <Form.Label>description</Form.Label>
                        <Form.Control 
                            name='description'
                            type="text"
                            onChange={this.onChange}
                            value={this.state.description}
                        />
                        </Form.Group>
              


              

              <Button variant="danger" size="lg" block="block" type="submit">
                Update Teacher's info
              </Button>
      </Form>
            </div>
        )
    }
}
export default EditTeacher ;