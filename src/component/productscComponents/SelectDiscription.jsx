import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDiscription() {
  const [Text, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{color:'color'}}>Normal</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Text}
          onChange={handleChange}
          autoWidth
          label="Normal"
          sx={{color:'white'}}
        >
          <MenuItem value="Normal">
            <em>Normal</em>
          </MenuItem>
          <MenuItem value={10}>Heading 1</MenuItem>
          <MenuItem value={21}>Heading 2</MenuItem>
          <MenuItem value={22}>Normal</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
