import MenuIcon from '@mui/icons-material/Menu';
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';

const drawerWidth = 240;

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = ({ menuList, isDrawerOpen, onDrawerOpen }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const onOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const onCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MuiAppBar
      position='fixed'
      open={isDrawerOpen}
      sx={{ backgroundColor: '#438A7A' }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onDrawerOpen}
          edge='start'
          sx={{
            marginRight: 5,
            ...(isDrawerOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {!isDrawerOpen ? (
            <Link href='/'>
              <Box
                component='img'
                src='https://raw.githubusercontent.com/SAKILsCode/invoiceX/main/src/assets/logo.png'
                alt='Logo'
                sx={{ width: '150px' }}
              />
            </Link>
          ) : (<Box/>)}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='user logo' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={onCloseUserMenu}
            >
              {menuList.map((item) => (
                <MenuItem key={item} onClick={onCloseUserMenu}>
                  <Typography textAlign='center'>{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
export default Navbar;
