function Progress({ maxNumberOfQuestions, index, points, answer, maxPoints }) {
  // const currentPoint =

  return (
    <header className="progress">
      <progress
        max={maxNumberOfQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Questions <strong>{index + 1}</strong>/{maxNumberOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
