import React ,{Component} from 'react';

import {Link ,Route, Switch,BrowserRouter as Router} from 'react-router-dom'

import { Navbar, Container, Nav ,Row, Col} from 'react-bootstrap'


import ListeCourse from './listeCourse'
import CreateCourse from './createCourse'
import EditCourse  from './editeCourse'

class Courses extends Component{
    
    render(){
        return(
            <Router>
                <Container>
          <Navbar bg="dark" variant="dark">
          

            <Nav className="justify-content-end">
            
              <Nav>
                <Link to="/listeCourse" className="nav-link">
                 Courses List
                </Link>
                
              </Nav>
              <Nav>
                <Link to="/createCourse" className="nav-link">
                 Create course
                </Link>
              </Nav>
            </Nav>

          
          </Navbar>
        </Container>

         <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={ListeCourse} />
                <Route exact path="/editeCourse/:id" component={EditCourse} />
                <Route exact path="/listeCourse" component={ListeCourse} /> 
                
                <Route exact path="/createCourse" component={CreateCourse} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
            </Router>
        )
    }
}
export default Courses;