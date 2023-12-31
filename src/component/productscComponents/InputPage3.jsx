import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


export default function InputAdornments(props) {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
// css box sx={{ display: 'flex', flexWrap: 'wrap', borderColor:'white',color:'#f1535' ,}}
  return (
    <Box >
      <div>
        <TextField
          label=""
          id="outlined-start-adornment"
          sx={{ m: 1, width: '65ch'}}
          InputProps={{
            startAdornment: <InputAdornment position="start">{props.text}</InputAdornment>,
          }}
        />
      </div>
    </Box>
  );
}
