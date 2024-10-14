import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  counter: 0,
  isVisible: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
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

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
