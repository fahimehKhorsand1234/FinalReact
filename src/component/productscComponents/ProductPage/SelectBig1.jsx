import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBig1({value1,value2,value3,value4,value5,text}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
//   minWidth: 175 
  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
          label="value"
          className='MuiFormControl-root'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>{value1}</MenuItem>
          <MenuItem value={20}>{value2}</MenuItem>
          <MenuItem value={30}>{value3}</MenuItem>
          <MenuItem value={40}>{value4}</MenuItem>
          <MenuItem value={50}>{value5}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
