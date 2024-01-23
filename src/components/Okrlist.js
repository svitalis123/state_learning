// what we intend to have on this page
// use usereducer to manage state of componets with many updates
// create function to handle the dispatch
// prop drilling of these functions and the state
import React, {useReducer} from 'react'
import Addlist from './reducerwithoutcontext/Addlist';
import Updatelist from './reducerwithoutcontext/Updatelist';

function Okrlist() {
  const [tasks, dispatch] =  useReducer(taskReducer, initialTasks);
  // function to dispatch add, changing and deleteing
  function handleAdded(text){
    dispatch({
      type: 'added',
      id: thindex+1,
      text: text,
    })
  }
  
  function handleChanged(task){
    dispatch({
      type: 'changed',
      task: task
    })
  }

  function handleDelete(id){
    dispatch({
      type: "deleted",
      id: id
    })
  }
  return (
    <div>
      <h2>Ready to rock</h2>
      <Addlist
        adding={handleAdded}
      />
      <Updatelist
        tasks={tasks}
        changing={handleChanged}
        deleting={handleDelete}
      />
    </div>
  )
}

export default Okrlist

// let's write our reducer functionality
function taskReducer(tasks, action){
  switch(action.type){
    case 'added':
      return [...tasks, {id: action.id, text: action.text, done: false}]
    case 'changed':
      return tasks.map((task) => {if(task.id === action.task.id){
        return action.task
      }else {return task }})
    case 'deleted':
      return tasks.filter((task) => task.id !== action.id)
    default:
      throw Error("no such case", action.type)
  }
}

// create where to start counting the id after 1
let thindex = 1;
// for testing we can have initial one todo
const initialTasks = [
  { id: 1, text: "add meat", done: false}
] 