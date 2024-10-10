import { useState } from "react";

export function useInput(defaultValue, validationFunction) {
  const [inputData, setInputData] = useState(defaultValue);
  const [isEdited, setIsEdited] = useState(false);

  const valueIsValid = validationFunction(inputData);

  const handleInputDataChange = event => {
    setInputData(event.target.value);
    setIsEdited(false);
  };

  const handleInputBlur = () => {
    setIsEdited(true);
  };

  return {
    value: inputData,
    handleInputDataChange,
    handleInputBlur,
    hasError: isEdited && !valueIsValid,
  };
}
