import { createSlice } from '@reduxjs/toolkit';

const chart2Slice = createSlice({
  name: 'chart2',
  initialState: {
    xAxis: ['Older', 'Jan 1-8', 'Jan 9-16', 'Jan 17-24', 'Jan 25-31', 'Future'],
    yAxis: [20, 21, 25, 20, 14, 35]
  },
  reducers: {
    randomize: (state) => {
      state.yAxis = Array.from(
        Array.from({ length: 6 }, () => Math.floor(Math.random() * 25) + 1)
      );
    }
  }
});

export const { randomize } = chart2Slice.actions;
export default chart2Slice.reducer;
