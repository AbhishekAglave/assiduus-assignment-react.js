import { configureStore } from '@reduxjs/toolkit';
import chart1Reducer from './chart1Slice';
import chart2Reducer from './chart2Slice';
import chart3Reducer from './chart3Slice';
import chart4Reducer from './chart4Slice';

export const store = configureStore({
  reducer: {
    chart1: chart1Reducer,
    chart2: chart2Reducer,
    chart3: chart3Reducer,
    chart4: chart4Reducer
  }
});
