import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const DashboardLayout = ({ sidebarItems }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Dashboard navbar */}
      <Navbar isDrawerOpen={isDrawerOpen} onDrawerOpen={handleDrawerOpen} />

      {/* Dashboard drawer */}
      <Drawer variant='permanent' open={isDrawerOpen}>
        {/* drawer nav */}
        <DrawerHeader>
          <Link to='/'>
            <Box
              component='img'
              src='https://raw.githubusercontent.com/SAKILsCode/invoiceX/main/src/assets/logo_%23438A7A.png'
              alt='Logo'
              sx={{ width: '150px' }}
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* Drawer item list */}
        <List>
          {sidebarItems.map((item, index) => (
            <Link key={item.address} to={`/${item.address}`}>
              {item.address !== '' && (
                <ListItem
                  key={item.title}
                  disablePadding
                  sx={{ display: 'block' }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: isDrawerOpen ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isDrawerOpen ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ opacity: isDrawerOpen ? 1 : 0, color: 'grey' }}
                    />
                  </ListItemButton>
                </ListItem>
              )}
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>

      {/* Routing */}
      <Box component='main' sx={{ flexGrow: 1, pt: 8 }}>
        <Routes>
          {sidebarItems.map((item) => (
            <Route
              key={item.address}
              path={`/${item.address}`}
              element={item.element}
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
