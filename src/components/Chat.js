import React, { useState } from 'react'
import Category from './Category'
import Channel from './Channel'
const channels = [
  {
    id: 1,
    name: "Realestate developers"
  },
  {
    id: 2,
    name: "Interior designers"
  },
  {
    id:3,
    name: "Architects"
  }

]
function Chat() {
  // create a state to hold the objects of our array
  // for category we will pass on the list of channels then pass on the default channel, and a function that set a channel after it is selected
  const [current, setCurrent] = useState(channels[0])
  return (
    <div>
      <Category
        channels={channels}
        currentChannel={current}
        selectChannel={channel => setCurrent(channel)}      
      />
      <Channel key={current.id} channel={current} />
    </div>
  )
}

export default Chat