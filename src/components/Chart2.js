import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const BarChart = () => {
  const chartRef = useRef(null);

  const chartData = useSelector((state) => state.chart2);

  useEffect(() => {
    d3.select(chartRef.current).selectAll('*').remove();

    const xScale = d3
      .scaleBand()
      .domain(chartData.xAxis)
      .range([0, 400])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData.yAxis) + 5])
      .range([200, 0]);

    const chartContainer = d3.select(chartRef.current);

    const svg = chartContainer
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 400 200');

    svg
      .selectAll('rect')
      .data(chartData.yAxis)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(chartData.xAxis[i]) + 24)
      .attr('y', (d) => yScale(d) - 20)
      .attr('width', xScale.bandwidth() - 48)
      .attr('height', (d) => 200 - yScale(d))
      .attr('fill', 'lightgreen')
      .attr('rx', 4)
      .attr('ry', 4);

    svg
      .append('g')
      .attr('transform', 'translate(0,180)')
      .call(d3.axisBottom(xScale).tickSize(0).tickPadding(10))
      .select('.domain')
      .remove();

    svg
      .append('g')
      .call(d3.axisLeft(yScale).tickSize(0).tickPadding(10))
      .select('.domain')
      .remove();
  }, [chartData]);

  return (
    <Box
      sx={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px' }}
    >
      <Box
        padding={1}
        display="flex"
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={1}
        minHeight={'80px'}
      >
        <Typography variant="h5">Invoices Owed To You</Typography>
        <Box display="flex" gap={1}>
          <Button
            variant="text"
            style={{
              backgroundColor: '#1976d226',
              color: 'green',
              fontWeight: 'bold'
            }}
          >
            New Sales Invoice
          </Button>
        </Box>
      </Box>
      <Divider />
      <div ref={chartRef}></div>
    </Box>
  );
};

export default BarChart;
