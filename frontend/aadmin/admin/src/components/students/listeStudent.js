import React ,{Component} from 'react';
// import {Link} from 'react-router-dom';
// import {Button } from 'react-bootstrap'
import axios from 'axios'

class ListeStudent extends Component{
    constructor(){
        super()

        
        this.state={
            students:[]
        }

    }

    componentDidMount(){
        axios.get('http://localhost:5000/students/')
        .then(res => {
          this.setState({
            students: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })


    }

    render(){
        console.log(this.state.students)
        return(
            <div>
                <h1 className='text-align-center'>hello from ListeStudent component</h1>

                <div className="container">
                        

                        <div className="row">
                            
                           {this.state.students.map((el,i)=>
                               <div className="col-lg-3 col-sm-6" key={i}>
                               <div className="single_instructor">
                                  
                                   <div className="author_decs">
                                       <h4>{el.firstName}</h4>
    <h4>{el.lastName}</h4>
                                       <p className="profession">{el.email}</p>
                                       
                                       
                                       
                                     
                                       
                                       {/* <><Link className="edit-link" to={"/editStudent/" + el._id}>
                                            Edit
                                        </Link>
                                        <Button size="sm" variant="danger" >Delete</Button>
                                       </> */}

                                   </div>
                               </div>
                           </div>
                           )}
                        </div>
                </div>


            </div>
        )
    }
}
export default ListeStudent;