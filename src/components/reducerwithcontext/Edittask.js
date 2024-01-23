import React, {useState, useContext} from 'react'
import { stateContext, dispatchContext } from './LevelContext'

function Edittask() {
  const tasks = useContext(stateContext);
  return (
    <div>
      {
        tasks.map((task) => (
          <Task
           key={task.id}
           task={task}          
          />
        ))
      }
    </div>
  )
}

export default Edittask

function Task({task}) {
  const dispatch = useContext(dispatchContext); 
  const [editing, setEditing] = useState(false);

  let content;
  if(editing) {
    content = (
      <>
        <input
          type='text'
          value={task.text}
          onChange={(e) => dispatch({type: "changed", task: {...task, text: e.target.value}})}
        />
        <button type='button' onClick={() => setEditing(false) }>
          done
        </button>
      </>
    )
  }else{
    content = (
      <>
        {task.text}
        <button type='button' onClick={() => setEditing(true)}>
          edit
        </button>
      </>
    )
  }

  return (
    <div>
      <input
      type='checkbox'
      checked={task.done}
      onChange={(e) => dispatch({type: "changed", task: {...task, done: e.target.checked}})}
      />
      {content}
      <button type='button' onClick={() => dispatch({type: "deleted", id:task.id})}>
        delete
      </button>
    </div>
  )
}

