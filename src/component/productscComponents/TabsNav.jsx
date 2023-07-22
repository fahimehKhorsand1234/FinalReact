import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import GridViewIcon from '@mui/icons-material/GridView';

export default function TabsNav() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <div className='flex flex-row  justify-around gap-4'>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <AutoAwesomeMotionIcon/><Tab value="one" label="OVERVIEW" /> 
                <BorderColorIcon /><Tab value="two" label="ITEMS" />
                <GridViewIcon /><Tab value="three" label="PROJECTS" />
            </Tabs>
      </div>
    </Box>
  );
}
