import { useState } from "react";

export default function Login() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [isEdited, setIsEdited] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = isEdited.email && !inputData.email.includes("@");

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleInputDataChange = (identifier, value) => {
    setInputData(prevData => ({
      ...prevData,
      [identifier]: value,
    }));

    setIsEdited(prevData => ({
      ...prevData,
      [identifier]: false,
    }));
  };

  const handleInputBlur = identifier => {
    setIsEdited(prevData => ({
      ...prevData,
      [identifier]: true,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={event => handleInputDataChange("email", event.target.value)}
            value={inputData.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={event => handleInputDataChange("password", event.target.value)}
            value={inputData.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
