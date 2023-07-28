import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputEmail({widthx,heghity}) {
  return (
  <Box  sx={{'& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root ':{
    borderRadius:'16px!important',borderColor:"#fff",
  }, m: 1 ,width:100}} >
      
        <TextField
          disabled
          id="outlined-disabled"
          label=""
          defaultValue="your email address"
          className="w-96 h-10 ring-2 ring-indigo-900 rounded rounded-2xl text-gray-500 mb-6 mt-8"
        />
     
    </Box>
  );
}
