import React ,{Component} from 'react'

class ToDoTask extends Component{
    constructor(){
        super()
        // this.state={
        //     todos:[]
        // }
    }
   addtodo=(e)=>{
        let todo = this.refs.todo.value
        console.log(todo)
       
       
    }

    render(){
        return(
            <div>
            <h1>My toDo Task</h1>
            <input 
                    type='text'     
                    palceholder ='enter todo'
                    ref='todo'
            />
            <input 
                    type='button'
                    value='Add To Do'
                    onClick={this.addtodo.bind(this)}
            />
              
              <p>list items to do</p>
              {/* {this.state.todos.map((todo,index)=>{

                  
                  return(
                  <div key={index}>
                      {todo}
                      
                    </div>
                  )
                  
              })} */}
            </div>
        )
    }
}
export default ToDoTask;