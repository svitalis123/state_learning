import React, { useState } from 'react'
// let's focus on state structure
// our aim is to keep our state dry that is avoid repetitions
function Names() {
  // state for firstname and lastname
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const fullname = firstname + ' ' + lastname;
  // handle first name
   const handleFirstname = (e) => {
    setFirstname(e.target.value)
   }

   const handleLastname = (e) => {
    setLastname(e.target.value)
   }
  return (
    <div>
      {/* state structure */}
      <h2>
        State Structure
      </h2>
      <br/ >
      <label for="firstname" />
      <input type='text' value={firstname} onChange={handleFirstname} id='firstname' placeholder='first name e.g John' />
      <br />
      <label for="lastname" />
      <input type='text' value={lastname} onChange={handleLastname} id='lastname' placeholder='last name e.g doe' />

      <p>Names: {fullname}</p>
    </div>
  )
}

export default Names