import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  openCheckout: () => {},
  closeCheckout: () => {},
});

export function UserProgressProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  const showCart = () => {
    setUserProgress("cart");
  };

  const hideCart = () => {
    setUserProgress("");
  };

  const openCheckout = () => {
    setUserProgress("checkout");
  };

  const closeCheckout = () => {
    setUserProgress("");
  };

  const contextValue = {
    progress: userProgress,
    showCart,
    hideCart,
    openCheckout,
    closeCheckout,
  };

  return <UserProgressContext.Provider value={contextValue}>{children}</UserProgressContext.Provider>;
}

export default UserProgressContext;
