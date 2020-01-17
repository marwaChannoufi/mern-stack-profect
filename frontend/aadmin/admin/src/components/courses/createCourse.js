

import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'



 class CreateCourse extends Component{
    constructor(){
        super()
        this.state={
            titel :'',
            description:'',
            categorie :'',
            link :'',
            date:'',
            teacher:'',
            teachers:[]
           
            

    }

    
    this.onChange = this.onChange.bind(this)
    
    this.onSubmit = this.onSubmit.bind(this)
    }
    


    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
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

    onSubmit(e){
        e.preventDefault()
        // let el=this.state
            // console.log(el)
            axios.post('http://localhost:5000/courses/', this.state)
            .then(res => console.log(res.data));
            
        this.setState({
          titel :'',
          description:'',
          categorie :'',
          link :'',
          date:'',
          teacher:''
          


        })
    }

    render(){
        return (
            <div> 
                <h1>Create a new course</h1>
                <div className="form-wrapper">
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
                        <Form.Label>image cours</Form.Label>
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
                       
                                <select name='teacher' onChange={(e) => this.setState({ teacher: e.target.value })}>
                                    {this.state.teachers.map(el=>
                                    <option name="teacher">{el.name}</option>)}
                                    
                                </select >
                        <Button variant="primary" size="lg" block="block" type="submit"  >
                            
                        Create Student
                        
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
export default CreateCourse;

