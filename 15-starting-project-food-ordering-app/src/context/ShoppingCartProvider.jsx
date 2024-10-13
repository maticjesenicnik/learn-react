import { createContext, useReducer } from "react";

export const CartContext = createContext({
  meals: [],
  addMeal: () => {},
  removeMeal: () => {},
  clearCart: () => {},
});

const shoppingCartReducer = (state, action) => {
  if (action.type === "ADD_MEAL") {
    const updatedMeals = [...state.meals];
    const existingMealIndex = state.meals.findIndex(meal => meal.id === action.meal.id);

    if (existingMealIndex > -1) {
      const meal = state.meals[existingMealIndex];
      const updatedMeal = {
        ...meal,
        quantity: meal.quantity + 1,
      };
      updatedMeals[existingMealIndex] = updatedMeal;
    } else {
      updatedMeals.push({ ...action.meal, quantity: 1 });
    }

    return { ...state, meals: updatedMeals };
  }

  if (action.type === "REMOVE_MEAL") {
    const existingMealIndex = state.meals.findIndex(meal => meal.id === action.meal.id);
    const meal = state.meals[existingMealIndex];
    const updatedMeals = [...state.meals];

    if (meal.quantity === 1) {
      updatedMeals.splice(meal, 1);
    } else {
      const updatedMeal = {
        ...meal,
        quantity: meal.quantity - 1,
      };

      updatedMeals[existingMealIndex] = updatedMeal;
    }

    return { ...state, meals: updatedMeals };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, meals: [] };
  }

  return state;
};

export default function ShoppingCartProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    meals: [],
  });

  const addMeal = meal => {
    shoppingCartDispatch({
      type: "ADD_MEAL",
      meal,
    });
  };

  const removeMeal = id => {
    shoppingCartDispatch({
      type: "REMOVE_MEAL",
      id,
    });
  };

  const clearCart = () => {
    shoppingCartDispatch({
      type: "CLEAR_CART",
    });
  };

  const contextValue = {
    meals: shoppingCartState.meals,
    addMeal: addMeal,
    removeMeal: removeMeal,
    clearCart: clearCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
