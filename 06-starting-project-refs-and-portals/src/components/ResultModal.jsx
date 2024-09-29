import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, timeRemaining, onReset }, ref) {
  const dialog = useRef();

  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> {targetTime > 1 ? "seconds" : "second"}
      </p>
      {userLost && <p>The timer has run out.</p>}
      {!userLost && (
        <p>
          You stopped the timer with{" "}
          <strong>
            {formattedTimeRemaining} {formattedTimeRemaining > 1 ? "seconds" : "second"} left.
          </strong>
        </p>
      )}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
