// i want to achieve 
// updating check mark
// updating edit of content
// updating on delete

// on editing i will achieve by setting a state on editing or not editing then assign that to a declared content
import React, { useState } from 'react'

function Updatelist({tasks, changing, deleting}) {
  return (
    <div>
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            task = {task}
            onchange={changing}
            ondelete={deleting}
          />
        ))
      }
    </div>
  )
}

export default Updatelist

function Task({task, onchange, ondelete}){
  const [editing, setEditing] = useState(false)
  let contents;
  if(editing){
    contents = (
      <>
        <input
          type='text'
          value={task.text}
          onChange={(e) => {onchange({...task, text: e.target.value})}}
        />
        <button type='button' onClick={() => setEditing(false)}>
          done
        </button>
      </>
    )
  }else{
    contents = (
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
      <input type='checkbox' value={task.done} onChange={(e) => {onchange({...task, done: e.target.checked})}} />
      {contents}
      <button type='button' onClick={() => ondelete(task.id)}>
        delete
      </button>
    </div>
  )

}