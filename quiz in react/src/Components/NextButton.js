import React from "react";

export default function NextButton({
  dispatch,
  answer,
  curIndex,
  numOfQuestions,
}) {
  if (answer === null) return null;
  if (curIndex < numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (curIndex === numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
}
