import { createSlice } from '@reduxjs/toolkit';

const chart4Slice = createSlice({
  name: 'chart3',
  initialState: {
    col1: [6549, 2321, 7876, 9561, 489465],
    col2: [654, 489465, 95617, 2321, 787]
  },
  reducers: {
    randomize: (state) => {
      state.col1 = Array.from(
        Array.from({ length: 5 }, () => Math.floor(Math.random() * 10500) + 1)
      );
      state.col2 = Array.from(
        Array.from({ length: 5 }, () => Math.floor(Math.random() * 10500) + 1)
      );
    }
  }
});

export const { randomize } = chart4Slice.actions;
export default chart4Slice.reducer;
