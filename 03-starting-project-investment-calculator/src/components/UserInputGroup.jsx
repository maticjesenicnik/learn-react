import UserNumberInput from "./UserNumberInput";
import { useState } from "react";

export default function UserInputGroup() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10_000,
    annualInvestment: 1_200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (identifier, value) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [identifier]: value,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <UserNumberInput
          label="Initial Investment"
          id="initial-investment"
          name="initialInvestment"
          value={userInput.initialInvestment}
          onChange={handleChange}
        />
        <UserNumberInput label="Annual Investment" id="annual-investment" name="annualInvestment" value={userInput.annualInvestment} onChange={handleChange} />
      </div>
      <div className="input-group">
        <UserNumberInput label="Expected Return" id="expected-return" name="expectedReturn" value={userInput.expectedReturn} onChange={handleChange} />
        <UserNumberInput label="Duration" id="duration" name="duration" value={userInput.duration} onChange={handleChange} />
      </div>
    </section>
  );
}
