import React, { useState } from 'react'

function Addlist({adding}) {
  const [text, setText] = useState('');
  return (
    <div>
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <br></br>
      <button type='button' onClick={() => {adding(text)}} >
        add
      </button>
    </div>
  )
}

export default Addlist