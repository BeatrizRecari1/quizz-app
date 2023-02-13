import { useState } from "react";
import QuizzResult from "../components/QuizzResult";
import QuizzCard from "../components/QuizzCard";
import { data } from "../data/data";

export default function Quizz() {
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const length = data.length;

  const handleReset = () => {
    setShowScore(false);
    setScore(0);
    setQuestionId(0);
  };

  const handleQuestion = (isCorrect) => {
    if (isCorrect === true) setScore(score + 1);

    const newQuestionId = questionId + 1;
    newQuestionId < length ? setQuestionId(newQuestionId) : setShowScore(true);
  };

  const [showScore, setShowScore] = useState(false);

  return (
    <>
      <h1>Quizz</h1>
      {showScore ? (
        <QuizzResult length={length} score={score} handleReset={handleReset} />
      ) : (
        <QuizzCard
          data={data}
          length={length}
          questionId={questionId}
          handleQuestion={handleQuestion}
        />
      )}
    </>
  );
}
