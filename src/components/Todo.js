import React, {useReducer} from 'react'

const todos = [
  {
    id: 1,
    title: "Write a blog",
    completed: false
  },
  {
    id: 2,
    title: "Publish a blog",
    completed: false
  }
]

function myreducer(todo, action) {
  switch(action.type){
    case 'COMPLETED':
      return todo.map((to) => {
        if(to.id === action.id){
          return {...to, completed:!to.completed}
        }else{
          return to
        }
      })
    default:
      return todo
  }
}


function Todo() {
  const [todo, dispatch] = useReducer(myreducer, todos)
  const handleChange = (todo) => {
    dispatch({type: 'COMPLETED', id: todo.id})
  }
  return (
    <div>
      {
        todo.map((to) => (
          <label key={to.id}>
            <input type='checkbox' checked={to.completed} onChange={() => handleChange(to)}  />
            {to.title}
          </label>
        ))
      }
    </div>
  )
}

export default Todo