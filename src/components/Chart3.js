import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function Chart3() {
  const chartRef = useRef(null);

  const chartData = useSelector((state) => state.chart3);

  useEffect(() => {
    d3.select(chartRef.current).selectAll('*').remove();

    const xScale = d3
      .scaleBand()
      .domain(chartData.xAxis)
      .range([0, 300])
      .padding(0.1);

    const yScale1 = d3
      .scaleLinear()
      .domain([0, d3.max(chartData.yAxis1) + 5])
      .range([200, 0]);

    const yScale2 = d3
      .scaleLinear()
      .domain([0, d3.max(chartData.yAxis2) + 5])
      .range([200, 0]);

    const chartContainer = d3.select(chartRef.current);

    const svg = chartContainer
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 320 200');

    svg
      .selectAll('.bar1')
      .data(chartData.yAxis1)
      .enter()
      .append('rect')
      .attr('class', 'bar1')
      .attr('x', (d, i) => xScale(chartData.xAxis[i]) + 12)
      .attr('y', (d) => yScale1(d) - 20)
      .attr('width', xScale.bandwidth() - 24)
      .attr('height', (d) => 200 - yScale1(d))
      .attr('fill', 'lightgreen')
      .attr('rx', 6)
      .attr('ry', 6);

    svg
      .selectAll('.bar2')
      .data(chartData.yAxis2)
      .enter()
      .append('rect')
      .attr('class', 'bar2')
      .attr('x', (d, i) => xScale(chartData.xAxis[i]) + 12)
      .attr('y', (d) => yScale2(d) - 20)
      .attr('width', xScale.bandwidth() - 24)
      .attr('height', (d) => 200 - yScale2(d))
      .attr('fill', 'green')
      .attr('rx', 6)
      .attr('ry', 6);

    svg
      .append('g')
      .attr('transform', 'translate(0,180)')
      .call(d3.axisBottom(xScale).tickSize(0).tickPadding(10))
      .select('.domain')
      .remove();

    svg
      .append('g')
      .call(d3.axisLeft(yScale1).tickSize(0).tickPadding(10))
      .select('.domain')
      .remove();

    svg
      .append('g')
      .attr('transform', 'translate(320,0)')
      .call(d3.axisRight(yScale2).tickSize(0).tickPadding(10))
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
        minHeight={'80px'}
      >
        <Typography variant="h5">Total Cash Flow</Typography>
        <Box display="flex" alignItems={'center'} gap={1}>
          <Box
            width={20}
            height={20}
            sx={{ backgroundColor: 'lightgreen', borderRadius: '6px' }}
          ></Box>
          <Typography>In</Typography>
          <Box
            width={20}
            height={20}
            sx={{ backgroundColor: 'green', borderRadius: '6px' }}
          ></Box>
          <Typography>Out</Typography>
        </Box>
      </Box>
      <Divider />
      <div ref={chartRef}></div>
    </Box>
  );
}

export default Chart3;
