import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import DashboardScreen from './screens/Dashboard';
import {
  AccountBalanceWallet,
  AttachMoney,
  Contacts,
  Dashboard,
  Description,
  Notifications,
  Person
} from '@mui/icons-material';
import SearchBar from './components/SearchBar';
import { Avatar, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

const drawerWidth = 240;
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Logo = React.createElement('img', {
    src: '/assiduus.png',
    alt: 'logo',
    height: 38
  });

  const drawer = (
    <>
      <Toolbar>{Logo}</Toolbar>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton selected>
            <ListItemIcon>{<Dashboard />}</ListItemIcon>
            <ListItemText primary={'Dashboard'} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<AccountBalanceWallet />}</ListItemIcon>
            <ListItemText primary={'Accounts'} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<AttachMoney />}</ListItemIcon>
            <ListItemText primary={'Payroll'} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<Description />}</ListItemIcon>
            <ListItemText primary={'Reports'} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<Person />}</ListItemIcon>
            <ListItemText primary={'Advisor'} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<Contacts />}</ListItemIcon>
            <ListItemText primary={'Contacts'} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
        color=""
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          ></Typography>
          <Typography />
          <SearchBar />
          <IconButton color="inherit" sx={{ mx: 2 }}>
            <Badge color="success" variant="dot">
              <Notifications />
            </Badge>
          </IconButton>
          <Avatar alt="User" src="/shraddha-kapoor-in-glasses.jpg" />
          <Select
            sx={{
              boxShadow: 'none',
              outline: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
              '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  border: 0
                },
              '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: 0
                }
            }}
          >
            <MenuItem value={'profile'}>Profile</MenuItem>
            <MenuItem value={'settings'}>Settings</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: 'rgba(25, 118, 210, 0.08)',
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh'
        }}
      >
        <Toolbar />
        <DashboardScreen />
      </Box>
    </Box>
  );
}

export default App;
