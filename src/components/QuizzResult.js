export default function QuizzResult({ score, length, handleReset }) {
  return (
    <>
      <h2>Quizz Result</h2>
      <p>
        You scored {score} out of {length}
      </p>
      <button onClick={handleReset}>Try Again</button>
    </>
  );
}
