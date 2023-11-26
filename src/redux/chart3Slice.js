import { createSlice } from '@reduxjs/toolkit';

const chart3Slice = createSlice({
  name: 'chart3',
  initialState: {
    xAxis: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    yAxis1: [20, 21, 25, 20, 14, 35],
    yAxis2: [15, 16, 15, 10, 4, 25]
  },
  reducers: {
    randomize: (state) => {
      state.yAxis2 = Array.from(
        Array.from({ length: 6 }, () => Math.floor(Math.random() * 25) + 1)
      );
      state.yAxis1 = state.yAxis2.map((value) =>
        Math.min(value + Math.floor(Math.random() * (25 - value) + 1), 25)
      );
    }
  }
});

export const { randomize } = chart3Slice.actions;
export default chart3Slice.reducer;
