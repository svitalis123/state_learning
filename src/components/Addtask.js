import React, { useState } from 'react'

function Addtask({
  addtask
}) {
  const [answer, setAnswer] = useState(' ')
  const handleSubmit = (e) => {
    e.preventDefault();
    addtask(answer)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='add task'
      onChange={(e) => setAnswer(e.target.value)}
      />
      <button
      type='submit'
      >
        add
      </button>
    </form>
  )
}

export default Addtask