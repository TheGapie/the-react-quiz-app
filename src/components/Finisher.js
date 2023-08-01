function Finisher({ points, maxPoints, highestScore, dispatch }) {
  return (
    <div>
      <div className="result">
        <span>
          You got {points} out of {maxPoints}
        </span>
      </div>
      <p className="highscore">Highest Score : {highestScore}</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </div>
  );
}

export default Finisher;
