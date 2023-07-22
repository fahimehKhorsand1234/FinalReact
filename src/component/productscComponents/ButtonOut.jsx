import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonOut() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined"  sx={{backgroundColor :'white' }}>PREV</Button>
    </Stack>
  );
}
