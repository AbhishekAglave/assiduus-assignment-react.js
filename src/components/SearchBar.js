import { InputBase } from '@material-ui/core';
import { Search } from '@mui/icons-material';
import React from 'react';

function SearchBar() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
        padding: '2px 10px',
        borderRadius: '8px'
      }}
    >
      <Search />
      <InputBase type="text" placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
