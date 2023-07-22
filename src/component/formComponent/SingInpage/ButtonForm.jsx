import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonForm(props) {
  return (
    //variant="contained" disableElevation
    <Button variant="contained" className="btnform bg-blue-400 w-96 h-10  rounded ronded-2xl" >
      {props.text}
    </Button>
  );
}

