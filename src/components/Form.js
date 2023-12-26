import React, { useState } from 'react'

function Form() {
  // lets cover how to update answer
  // state with answer which is empty string before typing
  const [answer, setAnswer] = useState('');
  // a state for error with default being null
  const [error, setError] = useState(null);
  // we need to react to input to either submitting, typing, or success or error
  const [status, setStatus] = useState("typing");
  // let's handle on submitting the form
  const handleSubmit = async (e) => {
    // lets prevent refreshing
    e.preventDefault()
    // let set the status that it is submitting
    setStatus("submitting");
    // set error empty on submitting
    setError(null);
    // let's try and catch
    try{
      // await function that checks answer and pass on the answer
      await checkAnswer(answer)
      setStatus("success");
      setAnswer("");
    } catch(error) {
      setStatus("typing");
      setError(error);
    }
  }
  // lets handle the text area we want to get the updated answer once it is typed
  const handleTextChange = (e) => {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <h1>
        Reacting to input with state.
      </h1>
      <br />
      <p style={status === "success" ? {display: 'block'} : {display:'none'} }>
        Successfully guessed Right. It is React.
      </p>
      <br />
      <form
      onSubmit={handleSubmit}
      >
        <textarea
        value={answer}
        onChange={handleTextChange}
        disabled={status === "submitting"}
        />
        <br />
        <button
        type='submit'
        disabled={status === "submitting" || answer.length === 0 }
        >
          Submit
        </button>
        {
          error !== null && <p>{error.message}</p>
        }
      </form>
    </div>
  )
}

// lets handle to check if an answer is correct
// The correct answer is React
// We will compare answer to our answer using a promise and set a timeout to return the answer in 2s
// the function accepts an answer
function checkAnswer(answer){
  // we will return a promise if it is succesful we will resolve if it is not succesful we reject
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // it should return false if it is not react and true if it is
      let checkans =  answer.toLowerCase() !== "react"
      // lets set a conditional to check if it is true or false
      if(checkans){
        // if it is false we reject with an Error capital E
        reject(new Error("Wrong Answer, Try again"));
      }else{
        resolve();
      }
    }, 2000)
  })
}



export default Form