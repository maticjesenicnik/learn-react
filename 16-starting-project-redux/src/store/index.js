import { createStore } from "redux";

const initialState = {
  counter: 0,
  isVisible: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - action.amount,
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      isVisible: !state.isVisible,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
