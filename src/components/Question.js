import React, { useState, useEffect } from "react";


function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() =>{
    if (timeRemaining === 0){
      setTimeRemaining(10)
      onAnswered(false)
    }
    const time = setTimeout(()=>{setTimeRemaining((timeRemaining) => timeRemaining -1 )}, 1000)
    debugger
    return function cleanup(){
      clearTimeout(time)
    }
  }, [timeRemaining, onAnswered])


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);q
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
