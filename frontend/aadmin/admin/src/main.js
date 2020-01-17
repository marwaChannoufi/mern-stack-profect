import React ,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'


import FileUpload from './components/FileUpload'
import Courses from './components/courses/courses_index'
import Teachers from './components/teachers/teachers_index'
import Students from './components/students/student_index'
import ListeCourse from './components/courses/listeCourse'
// import EditTeacher from './components/teachers/editTeacher'
// import ListTeacher from './components/teachers/listTeachers'
// import CreateTeacher from './components/teachers/createTeacher'


class Main extends Component{

    render(){
        return( 
            <div>

                <Switch >
                    <Route exact path='/fileUpload' component={FileUpload} />
                    <Route  path='/courses_index' component={Courses} />
                    <Route  path='/student_index' component={Students} />
                     <Route  path='/teachers_index' component={Teachers} />
                     <Route path='/listeCourse' component={ListeCourse} />

                     
{/*                 
                <Route exact path="/editTeacher/:id" component={EditTeacher} />
                <Route exact path="/listTeacher" component={ListTeacher} />
                <Route exact path="/createTeacher" component={CreateTeacher} /> */}
                   {/* <Route  path='/tr' component={} />
                    <Route  path='/' componen={} />
                    <Route path='/' component={} /> */}
                </Switch>

                

            </div>
        )
    }
}
export default Main;