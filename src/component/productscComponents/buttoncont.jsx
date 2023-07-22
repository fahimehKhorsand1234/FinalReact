import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { backdropClasses } from '@mui/material';

export default function ButtonCont() {
  return (
    <Stack spacing={2} direction="row" sx={{'& button:hover':{backgroundColor:'#582cff', text:'Next'}}}>
      
      <Button variant="contained"sx={{backgroundColor :'#582cff' }} >NEXT</Button>
    
    </Stack>
  );
}
