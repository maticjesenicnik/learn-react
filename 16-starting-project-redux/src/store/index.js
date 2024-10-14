import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  isVisible: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
export const counterActions = counterSlice.actions;
