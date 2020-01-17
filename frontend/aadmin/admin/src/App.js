import React,{Component} from 'react';
import {Link } from 'react-router-dom'
import './App.css';

import {Navigation,Layout,Header,Drawer} from 'react-mdl'
import Main  from './main'

class  App extends Component {

  render(){
  return (
    
      <div>
       


    {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout >
        <Header title="DashboardAdmin" scroll>
        <div className="mdl-layout__header-row">
     
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
       
        <Navigation>
                <Link to="/student_index" className="mdl-navigation__link">Student</Link>
                <Link to="/teachers_index" className="mdl-navigation__link">Teachers</Link>
                <Link to="/courses_index" className="mdl-navigation__link">Courses</Link>
                <Link to="/" className="mdl-navigation__link">Msg_Users </Link>
                <Link to="/fileUpload" className="mdl-navigation__link">Fils_Uploded</Link>
                <Link to="/" className="mdl-navigation__link">Events</Link>
                <Link to="/" className="mdl-navigation__link">Events</Link>
            </Navigation>
      </nav>
    </div>
        </Header>
        <Drawer title="DashbordAdmin">
            <Navigation>
                <Link to="/student_index">Student</Link>
                <Link to="/teachers_index">Teachers</Link>
                <Link to="/courses_index">Courses</Link>
                <Link to="/">Msg_Users</Link>
                <Link to="/fileUpload">Fils_Uploded</Link>
                <Link to="/">Events</Link>
            </Navigation>
        </Drawer>
        {/* <Content>
            <div className="page-content" />
        </Content> */}
        <Main />
    </Layout>
</div>
        </div>
      
  );
}
}

export default App;
