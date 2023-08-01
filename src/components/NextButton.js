// import Finisher from './Finisher';

function NextButton({ dispatch, maxNumberOfQuestions, index }) {
  if (index < maxNumberOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        next
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
  }
}
export default NextButton;
