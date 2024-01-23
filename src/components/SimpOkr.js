import React, {useContext, useReducer} from "react";
import { stateContext } from "./reducerwithcontext/LevelContext";
import { dispatchContext } from "./reducerwithcontext/LevelContext";
import Addtask from "./reducerwithcontext/Addtask";
import Edittask from "./reducerwithcontext/Edittask";


function SimpOkr() {
  const [tasks, dispatch] =  useReducer(taskReducer, initialTask);
  return (
    <div>
      <stateContext.Provider value={tasks}>
        <dispatchContext.Provider value={dispatch}>
          <Addtask />
          <Edittask />
        </dispatchContext.Provider>
      </stateContext.Provider>
    </div>
  )
}

export default SimpOkr


function taskReducer(tasks, action){

  switch(action.type){
    case "added":
      return [...tasks, {id: action.id, text: action.text, done: false}]
    case "changed":
      return tasks.map((task) => {
        if(task.id === action.task.id){
          return action.task
        }else{
          return task
        }
      })
    case "deleted":
      return tasks.filter((task) => task.id !== action.id)
    default :
      throw Error("no such case ", action.type)
  }

}


const initialTask = [
  {id: 1, text:"merchant store", done: false}
]