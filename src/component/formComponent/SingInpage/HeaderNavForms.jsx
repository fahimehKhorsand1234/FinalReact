
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Container from '@mui/material/Container';

// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import SideBar from '../../Dashboard/Sidebar';
// import { Hidden } from '@mui/material';

// const drawerWidth = 240;
//  const navItems = ['Home', 'About', 'Contact'];

// function HeaderNavForms(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//    setMobileOpen((prevState) => !prevState);
//   };
// onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}
//   const drawer = (
//     <Box >
//        <Typography variant="h6" sx={{ my: 2 }}>
//         vision ui dashboard
//       </Typography> 
//       {/* <SideBar/> */}
//         <Divider /> 
//        <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>  
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex',justifyContent:'flex-start'}}>
//       {/* <CssBaseline /> */}
//       <AppBar sx={{backgroundColor:'transparent',boxShadow:'revert-layer',
//     '& .MuiContainer-root':{
//       backgroundColor:'transparent'
//     }}} component="nav">
//        <Container> 
      
//         <Toolbar sx={{display:'flex' ,justifyContent:'space-between'}}>
        
//             <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//              onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           > 
//             {/* <MenuIcon /> */}
//                <SideBar />   
//            </IconButton> 
//           <Typography
//             variant="h6"
//             component="div"
//            sx={{display:'flex' ,justifyContent:'space-between'}}
//           >
//             vision ui pro
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
            
//           </Box>
//          { /*????????????????????????????????????????????????????????????*/ }
//            <Button variant='contained' color='primary' sx={{sm:'block'}}>Buy now</Button> 
//          {/* <SideBar/>  */}
//         </Toolbar>
      
//         </Container>
//       </AppBar>
//        <Box component="nav"> 
//          <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//            onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer> 
//         {/* <SideBar/> */}
//        </Box> 
          
//     </Box>
//   );
// }

// HeaderNavForms.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default HeaderNavForms;
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Sidebar from '../../Dashboard/Sidebar';
import {Link} from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'Product', 'SingIn'];

function HeaderNavForms(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',justifyContent:'flex-start'}}>
      <CssBaseline />
      <AppBar sx={{backgroundColor:'transparent',boxShadow:'revert-layer',
     '& .MuiContainer-root':{
       backgroundColor:'transparent'
    }}} 
       component="nav">
        <Toolbar sx={{display:'flex' ,justifyContent:'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
           
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{display:'flex' ,justifyContent:"space-around"}}
          >
            VISION UI PRO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Button variant='contained' color='primary' sx={{borderRadius:10 ,display: {sm: 'none',lg:'block'}}} >
            <Link to='/default'>Buy now</Link>
            </Button> 
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
         
        </Typography>
      </Box>
    </Box>
  );
}

HeaderNavForms.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HeaderNavForms;
