import React, { useState } from 'react'

function Channel(
  {
  channel
  }
) {
  // lets handle change in text
  const [text, setText] = useState();
  const handleChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <form>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder={"chat"+ channel.name + "here"} 
        />
        <button>
          {channel.name}
        </button>
      </form>
    </div>
  )
}

export default Channel