import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const emailIsValid = emailValue.includes("@");

    if (!emailIsValid) {
      setEmailInvalid(true);
      return;
    }

    setEmailInvalid(false);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
