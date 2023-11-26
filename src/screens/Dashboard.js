import { Box } from '@mui/material';
import React from 'react';
import Chart1 from '../components/Chart1';
import Chart2 from '../components/Chart2';
import Chart3 from '../components/Chart3';
import Chart4 from '../components/Chart4';

function Dashboard() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 2,
        '@media (max-width:1080px)': {
          gridTemplateColumns: '1fr'
        }
      }}
    >
      <Chart1 />
      <Chart2 />
      <Chart3 />
      <Chart4 />
    </Box>
  );
}

export default Dashboard;
