import React from "react";

export default function Progress({ curIndex, numOfQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
        <progress max={numOfQuestions} value={curIndex + Number(answer !== null)}/>
      <p>
        Question {curIndex + 1} of {numOfQuestions}
      </p>
      <p>
        Points {points} / {maxPoints}
      </p>
    </header>
  );
}
