import React from "react";

export default function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, curIndex) => (
        <button
          className={`btn btn-option ${curIndex === answer ? "answer" : ""} ${
            hasAnswered
              ? curIndex === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: curIndex })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
