import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
});

export function UserProgressProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  const showCart = () => {
    setUserProgress("cart");
  };

  const hideCart = () => {
    setUserProgress("");
  };

  const contextValue = {
    progress: userProgress,
    showCart,
    hideCart,
  };

  return <UserProgressContext.Provider value={contextValue}>{children}</UserProgressContext.Provider>;
}

export default UserProgressContext;
