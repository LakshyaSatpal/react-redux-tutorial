import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    set(state, action) {
      state.counter = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
