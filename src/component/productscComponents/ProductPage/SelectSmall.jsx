import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//<InputLabel >number</InputLabel>
export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
     <FormControl sx={{ m: 1, minWidth: 75 }} size="small">
      
      <Select
        // labelId="demo-select-small-label"
        // id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        sx={{borderStyle:'solid',borderWidth:'2',borderColor:'black'}}
       
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={11}>2</MenuItem>
        <MenuItem value={12}>3</MenuItem>
        <MenuItem value={13}>4</MenuItem>
        <MenuItem value={14}>5</MenuItem>
        <MenuItem value={15}>6</MenuItem>
        <MenuItem value={16}>7</MenuItem>
        <MenuItem value={17}>8</MenuItem> 
      </Select>
     </FormControl>
  );
}
