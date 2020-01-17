
import React ,{Component} from 'react';

import {Link ,Route, Switch,BrowserRouter as Router} from 'react-router-dom'

import { Navbar, Container, Nav ,Row, Col} from 'react-bootstrap'

import ListTeacher from './listTeachers'
import EditTeacher from './editTeacher'
import CreateTeacher from './createTeacher'

class Teachers extends Component{
    
    render(){
        return(
            <Router>
                <Container>
          <Navbar bg="dark" variant="dark">
          

            <Nav className="justify-content-end">
            
              <Nav>
                <Link to="/listTeacher" className="nav-link">
                 Teachers List
                </Link>
                
              </Nav>
              <Nav>
                <Link to="/createTeacher" className="nav-link">
                 Create teacher
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
                <Route exact path='/' component={ListTeacher} />
                <Route exact path="/editTeacher/:id" component={EditTeacher} />
                <Route exact path="/listTeacher" component={ListTeacher} />
                
                <Route exact path="/createTeacher" component={CreateTeacher} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
            </Router>
        )
    }
}
export default Teachers;