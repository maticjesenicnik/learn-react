import { useState } from "react";
import Input from "./Input";

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
  const passwordIsInvalid = isEdited.password && inputData.password.trim().length < 8;

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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={event => handleInputDataChange("email", event.target.value)}
          value={inputData.email}
          error={emailIsInvalid && "Please provide a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={event => handleInputDataChange("password", event.target.value)}
          value={inputData.password}
          error={passwordIsInvalid && "Password must contain at least 8 characters"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
