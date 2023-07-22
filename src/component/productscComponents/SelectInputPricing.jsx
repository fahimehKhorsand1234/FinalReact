import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const currencies = [
  {
    value: 'USD',
    label: 'Usd',
  },
  {
    value: 'EUR',
    label: 'Eur',
  },
  {
    value: 'BTC',
    label: 'Btc',
  },
  {
    value: 'JPY',
    label: 'Jpy',
  },
];

export default function SelectInput() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {  width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        <TextField
          id="outlined-select-currency-native"
          select
          label=""
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText=""
          //sx={{borderRadius:'5px'}}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
