import React, {useContext, useState} from 'react'
import { dispatchContext } from './LevelContext';

function Addtask() {
  const [thetext, setText] =  useState('');
  const dispatch = useContext(dispatchContext);
  return (
    <div>
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <button type='button' onClick={() =>  {dispatch({type:"added", id:initialid+1, text:thetext}); }}>
        add
      </button>
    </div>
  )
}

export default Addtask
let initialid = 1;