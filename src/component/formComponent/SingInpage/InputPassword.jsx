import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputPassword() {
  return (
    <Box
     
    >
      <div className='mb-4 mt-4'>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
           className="w-96 h-10 ring-2 ring-indigo-900 rounded rounded-2xl text-gray-500 mb-6 mt-8"
        />
      </div>
     </Box>
  );
}
