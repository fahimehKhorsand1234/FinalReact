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
//class Box sx={{ width: '100%' }} //class div justify-center gap-2
  return (
    <Box >
        <div className='flex flex-row'>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <div><AutoAwesomeMotionIcon/><Tab value="one" label="OVERVIEW" /> </div>
                <div><BorderColorIcon /><Tab value="two" label="ITEMS" /></div>
                <div><GridViewIcon /><Tab value="three" label="PROJECTS" /></div>
            </Tabs>
      </div>
    </Box>
  );
}
