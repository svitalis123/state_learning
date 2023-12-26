import React, { useState } from 'react'

const data = [
  {
    id: 1,
    title: "why you need to know state management?",
    ans: "Keep your state DRY, share state between components and keepyour update state logic maintainable"
  },
  {
    id: 2,
    title: "what is keeping code dry?",
    ans: "ensuring no duplication DRY- Don't repeat yourself"
  },
  {
    id: 3,
    title: "what is Reacting to input with state?",
    ans: "avoid writing functions for disabled, enabled, error, you can handle that in state"

  }
]
function Accordion() {
  // we will be handling lifting state up 
  // we need to set our initial state
  const [index, setIndex] = useState(0)
  return (
    <div>
      <h1>
        Accordion of state management;
      </h1>
      {
        data.map((dat) => (
          <Frame
          key={dat.id}
          title={dat.title}
          theindex={index === dat.id}
          show={() => setIndex(dat.id)}
          >
            {dat.ans}
          </Frame>
        ))
      }
      
    </div>
  )
}

function Frame({
  title,
  children,
  theindex,
  show}
) {
  return (
  <div>
      <h3>
        {title}
      </h3>
      {
        theindex ? <p>{children}</p> : <button type='button' onClick={show}>show</button>
      }
  </div>
)}

export default Accordion