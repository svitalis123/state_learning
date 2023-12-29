import React from 'react'

function Category({
  
    channels,
    currentChannel,
    selectChannel
}
) {
  // on category we will have an ordered list with categories 
  return (
    <div>
      <ul>
        {
          channels.map((channel) => (
            <li key={channel.id}
            onClick={() => selectChannel(channel)}
            >
              <button>
              {channel.name}
              </button>
              
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Category