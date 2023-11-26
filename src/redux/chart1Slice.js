import { createSlice } from '@reduxjs/toolkit';

const chart1Slice = createSlice({
  name: 'chart1',
  initialState: {
    xAxis: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    yAxis: [0, 25, 20, 14, 35, 20, 22, 16, 32, 12]
  },
  reducers: {
    randomize: (state) => {
      // state.xAxis = Array.from(
      //   Array.from({ length: 10 }, () => Math.floor(Math.random() * 25) + 1)
      // );
      state.yAxis = Array.from(
        Array.from({ length: 10 }, () => Math.floor(Math.random() * 25) + 1)
      );
    }
  }
});

export const { randomize } = chart1Slice.actions;
export default chart1Slice.reducer;
