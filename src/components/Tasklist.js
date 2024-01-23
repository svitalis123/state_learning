import React, { useEffect, useState } from 'react'

function Tasklist({
  tasks,
  mychange,
  mydelete,
}) {
  const [editing, setediting] = useState(false);
  const [naem, setnaem ] = useState(tasks);
  useEffect(() =>{
    setnaem(tasks)
  },[tasks])
  const handleType = (e, id) => {
    e.preventDefault();
    mychange(naem[id-1])
    setediting(false)
  }

  const handleche = (e, id) => {
    const uptask = naem.map((n) => {
      if(n.id === id) {
        return {...n, text: e.target.value}
      }else{
        return n
      }
    })

    setnaem(uptask)
  }
  return (
    <div>
      {
        tasks.map((task) => (
          <div key={task.id}>
            <input
            type='checkbox'
            />
            {
              editing ?
                <form onSubmit={(e) => handleType(e, task.id)}>
                  <input
                    type='text'
                    value={naem.find((na) => na.id === task.id)?.text || ''}
                    onChange={(e) => handleche(e, task.id)}
                  />
                  <button
                  type='submit'
                  >
                    save
                  </button>
                </form>
              :
              <>
                <label>
                  {task.text}
                </label>
                <button
                type='button'
                onClick={() => setediting(true)}
                >
                  edit
                </button>
              </>
                
            }
            <button
            type='button'
            onClick={() => mydelete(task.id)}
            >
              delete
            </button>
          </div>
        ))
      }
      
    </div>
  )
}

export default Tasklist