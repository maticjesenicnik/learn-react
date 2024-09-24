export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} {targetTime > 1 ? "seconds" : "second"}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Timer is running... / Timer inactive</p>
    </section>
  );
}
