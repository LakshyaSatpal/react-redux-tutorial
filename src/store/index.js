import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increase() {},
    decrease() {},
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
