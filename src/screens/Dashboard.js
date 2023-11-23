import { Box } from '@mui/material';
import React from 'react';

function Dashboard() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 3,
        '@media (max-width:900px)': {
          gridTemplateColumns: '1fr' // Change to a single column for small screens
        }
      }}
    >
      <Box
        height={400}
        sx={{ backgroundColor: 'white', borderRadius: '10px' }}
      ></Box>
      <Box sx={{ backgroundColor: 'white', borderRadius: '10px' }}></Box>
      <Box sx={{ backgroundColor: 'white', borderRadius: '10px' }}></Box>
      <Box sx={{ backgroundColor: 'white', borderRadius: '10px' }}></Box>
    </Box>
  );
}

export default Dashboard;
