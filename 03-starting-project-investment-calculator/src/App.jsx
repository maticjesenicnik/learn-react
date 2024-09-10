import Header from "./components/Header";
import Results from "./components/Results";
import UserInputGroup from "./components/UserInputGroup";

import { useState } from "react";

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
        [identifier]: value,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInputGroup userInput={userInput} handleChange={handleChange} />
      <Results />
    </>
  );
}

export default App;
