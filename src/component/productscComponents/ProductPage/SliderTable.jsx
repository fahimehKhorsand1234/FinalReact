import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderTable({degre}) {
  return (
    // <Box sx={{ width: 50,m:1 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={degre}
        getAriaValueText={valuetext}
        color="secondary"
        
      />
    // </Box>
  );
}
