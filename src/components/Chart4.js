import React, { useEffect } from 'react';

import { Box, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function Chart4() {
  const chartData = useSelector((state) => state.chart4);

  return (
    <Box
      sx={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px' }}
    >
      <Box
        padding={1}
        display="flex"
        alignItems={'center'}
        justifyContent={'space-between'}
        minHeight={'80px'}
      >
        <Typography variant="h5">Account Watchlist</Typography>
      </Box>
      <Divider />
      <Box display={'flex'} padding={2} gap={2}>
        <Box display={'flex'} flexDirection={'column'} flex={3} gap={3}>
          <Typography color={'gray'}>Account</Typography>{' '}
          <Typography>Sales</Typography>
          <Typography>Advertising</Typography>
          <Typography>Inventory</Typography>
          <Typography>Entertainment</Typography>
          <Typography>Product</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} flex={1} gap={3}>
          <Typography color={'gray'}>This Month</Typography>

          {chartData.col1.map((item) => {
            return (
              <Typography>
                {item.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'INR'
                })}
              </Typography>
            );
          })}
        </Box>
        <Box display={'flex'} flexDirection={'column'} flex={1} gap={3}>
          <Typography color={'gray'}>YTD</Typography>
          {chartData.col2.map((item) => {
            return (
              <Typography>
                {item.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'INR'
                })}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Chart4;
