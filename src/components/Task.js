// import the usereducer
import React, {useReducer} from 'react'
import Addtask from './Addtask'
import Tasklist from './Tasklist'

function reducer(tasks, action){
  switch(action.type){
    case "added": {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }] 
    }
    case "change": {
      return tasks.map((task) => {
        if(task.id === action.task.id){
          console.log("hello",task.id, action.task.id, task, action.task)
          return action.task
        }else{
          return task
        }
      })
    }

    case "delete": {
      return tasks.filter((task) => task.id !== action.id)
    }

    default : {
      throw Error("there was an error")
    }
  }

}
function Task() {
  // i will use usereducer to extract edit delete and adding state to the reducer
  // usethe usereducer, it returns current state and dispatch function whil it accepts initial state and reducer
  const [tasks, dispatch] = useReducer(reducer, initialTaks);
  let intialindex = tasks.length + 1;
  console.log(tasks)
  const handleAdd = (text) => {
    dispatch({
      type: "added",
      id: intialindex++,
      text: text
    })
  }

  const handleChange = (task) => {
    dispatch({
      type: "change",
      task: task
    })
  }

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      id: id
    })
  }
  return (
    <div>
      <h2>My Tasks</h2>
      <br />
      <Addtask
       addtask = {handleAdd}
      />
      <Tasklist
       tasks={tasks}
       mychange={handleChange}
       mydelete={handleDelete}
      />
    </div>
  )
}

export default Task


const initialTaks = [
  {
    id: 1,
    text: "Jump",
    done: false
  },
  // {
  //   id: 2,
  //   text: "sing",
  //   done: false
  // },
  // {
  //   id: 3,
  //   text: "code",
  //   done: true
  // }
]