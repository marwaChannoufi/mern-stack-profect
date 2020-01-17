import React,{Component} from 'react'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'



 class CreateTeacher extends Component{
    constructor(){
        super()
        this.state={
            name :'',
            description:'',
            email:'',
            link :''
            

    }
    
    this.onChange = this.onChange.bind(this)
    
    this.onSubmit = this.onSubmit.bind(this)
    }
    


    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        // let el=this.state
            // console.log(el)
            axios.post('http://localhost:5000/teachers/', this.state)
            .then(res => console.log(res.data));
        
        this.setState({
            name :'',
            description:'',
            email:'',
            link :''

        })
    }

    render(){
        return (
            <div> 
                <h1>Create a new teacher</h1>
                <div className="form-wrapper">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="name">
                        <Form.Label>name teacher</Form.Label>
                        <Form.Control 
                            name='name'
                            type="text"
                            onChange={this.onChange}
                            value={this.state.name}
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
                        
                        <Form.Group controlId="email">
                        <Form.Label>image cours</Form.Label>
                        <Form.Control 
                            name='email'
                            type="email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                        </Form.Group>
                        

                        <Button variant="primary" size="lg" block="block" type="submit"  >
                            
                        Create teacher
                        
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
export default CreateTeacher;