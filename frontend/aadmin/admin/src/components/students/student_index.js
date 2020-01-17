import React ,{Component} from 'react';

import {Link ,Route, Switch,BrowserRouter as Router} from 'react-router-dom'

import { Navbar, Container, Nav ,Row, Col} from 'react-bootstrap'

import ListeStudent from './listeStudent'
// import EditStudent from './editStudent'

class Students extends Component{
    
    render(){
        return(
            <Router>
                <Container>
          <Navbar bg="dark" variant="dark">
          

            <Nav className="justify-content-end">
            
              <Nav>
                <Link to="/listeStudent" className="nav-link">
                  Student List
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
                {/* <Route exact path='/' component={ListeStudent} /> */}
                {/* <Route exact path="/editStudent/:id" component={EditStudent} /> */}
                <Route exact path="/listeStudent" component={ListeStudent} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
            </Router>
        )
    }
}
export default Students;