import { useState } from "react";

export default function Login() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleInputDataChange = (identifier, value) => {
    setInputData(prevData => ({
      ...prevData,
      [identifier]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={event => handleInputDataChange("email", event.target.value)} value={inputData.email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={event => handleInputDataChange("password", event.target.value)} value={inputData.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
