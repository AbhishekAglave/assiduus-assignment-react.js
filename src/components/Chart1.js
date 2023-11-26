import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { randomize } from '../redux/chart1Slice';

const Chart1 = () => {
  const chartRef = useRef(null);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const options = ['Manage', 'Auto', 'Manual'];

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    month: months[0],
    options: options[0]
  });

  const chartData = useSelector((state) => state.chart1);

  const onChangeHandle = (event) => {
    formData[event.target.name] = event.target.value;
    setFormData({ ...formData });
    dispatch(randomize());
  };

  useEffect(() => {
    d3.select(chartRef.current).selectAll('*').remove();

    const xScale = d3.scaleLinear().domain([9, 18]).range([5, 300]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData.yAxis) + 5])
      .range([200, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(chartData.xAxis[i]))
      .y((d) => yScale(d + 3))
      .curve(d3.curveMonotoneX);

    const chartContainer = d3.select(chartRef.current);

    const svg = chartContainer
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '-5 0 320 200');

    svg
      .append('path')
      .data([chartData.yAxis])
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'green');

    svg
      .append('g')
      .attr('transform', 'translate(0,180)')
      .call(
        d3
          .axisBottom(xScale)
          .tickValues(chartData.xAxis)
          .tickSize(0)
          .tickPadding(10)
      )
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
        gap={1}
        alignItems={'center'}
        justifyContent={'space-between'}
        minHeight={'80px'}
      >
        <Typography variant="h5">Checking Account</Typography>
        <Box display="flex" gap={1}>
          <FormControl>
            <Select
              variant="outlined"
              value={formData.options}
              onChange={onChangeHandle}
              name="options"
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Select
              variant="outlined"
              value={formData.month}
              onChange={onChangeHandle}
              name="month"
            >
              {months.map((month, index) => (
                <MenuItem key={index} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Divider />
      <div ref={chartRef}></div>
    </Box>
  );
};

export default Chart1;
