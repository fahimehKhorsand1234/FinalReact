import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineInput() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className=''>
        <TextField
          id="filled-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue="Drop files herevto upload"
          variant="filled"
          sx={{borderStyle:'dashed',borderWidth:'2px',borderColor:'gray',borderRadius:'5px'}}
        />
      </div>
    </Box>
  );
}
