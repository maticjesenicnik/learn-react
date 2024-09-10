import Header from "./components/Header";
import Results from "./components/Results";
import UserInputGroup from "./components/UserInputGroup";

import { StrictMode, useState } from "react";

function App() {
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
        [identifier]: +value,
      };
    });
  };

  const isUserInputValid = userInput.duration >= 1;

  return (
    <StrictMode>
      <Header />
      <UserInputGroup userInput={userInput} handleChange={handleChange} />
      {!isUserInputValid && <p className="center">Please enter a duration of at least 1 year.</p>}
      {isUserInputValid && <Results userInput={userInput} />}
    </StrictMode>
  );
}

export default App;
