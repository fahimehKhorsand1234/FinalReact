import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserInfoProducts from './UserInfoNewProduct';
import MediaNewProducts from './MediaNewProducts';
import SocialNewProduct from './SocialsNewProducts';
import PricingNewProducts from './PricingNewProducts';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
//css Box sx={{ width: '100%' }}
  return (
    <Box >
      <div className='flex justify-center '>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="User Info" {...a11yProps(0)} />
          <Tab label="Media" {...a11yProps(1)} />
          <Tab label="Socials" {...a11yProps(2)} />
          <Tab label="Profile" {...a11yProps(3)} />
        </Tabs>
      
      </Box>
      </div>
    <div className='w-1/2 mt-2 sm:mt-5'>
      <CustomTabPanel value={value} index={0}>
            <UserInfoProducts/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
            <MediaNewProducts/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
             <SocialNewProduct/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
            <PricingNewProducts/>  
      </CustomTabPanel>
      </div> 
    </Box>
   
  );
}
