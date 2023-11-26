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
  GitHub,
  Notifications,
  Person,
  Refresh
} from '@mui/icons-material';
import SearchBar from './components/SearchBar';
import { Avatar, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { randomize as randomizeChart1 } from './redux/chart1Slice';
import { randomize as randomizeChart2 } from './redux/chart2Slice';
import { randomize as randomizeChart3 } from './redux/chart3Slice';
import { randomize as randomizeChart4 } from './redux/chart4Slice';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink
} from 'react-router-dom';

const drawerWidth = 240;
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [activeRoute, setActiveRoute] = React.useState(0);

  const Logo = React.createElement('img', {
    src: '/assiduus.png',
    alt: 'logo',
    height: 38
  });

  const refreshData = () => {
    dispatch(randomizeChart1());
    dispatch(randomizeChart2());
    dispatch(randomizeChart3());
    dispatch(randomizeChart4());
  };

  const routes = [
    {
      path: '/dashboard',
      text: 'Dashboard',
      icon: <Dashboard />,
      component: <DashboardScreen />
    },
    {
      path: '/accounts',
      text: 'Accounts',
      icon: <AccountBalanceWallet />,
      component: <DashboardScreen />
    },
    {
      path: '/payroll',
      text: 'Payroll',
      icon: <AttachMoney />,
      component: <DashboardScreen />
    },
    {
      path: '/reports',
      text: 'Reports',
      icon: <Description />,
      component: <DashboardScreen />
    },
    {
      path: '/advisor',
      text: 'Advisor',
      icon: <Person />,
      component: <DashboardScreen />
    },
    {
      path: '/contacts',
      text: 'Contacts',
      icon: <Contacts />,
      component: <DashboardScreen />
    }
  ];

  const drawer = (
    <>
      <Toolbar>{Logo}</Toolbar>
      <Divider />
      <List>
        {routes.map((route, index) => (
          <NavLink
            key={route.path}
            to={route.path}
            style={{
              color: 'inherit',
              textDecoration: 'none'
            }}
            onClick={() => {
              refreshData();
              setActiveRoute(index);
            }}
          >
            <ListItem>
              <ListItemButton selected={activeRoute === index}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  );

  return (
    <Router>
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
            <IconButton onClick={refreshData} color="inherit" sx={{ ml: 2 }}>
              <Refresh />
            </IconButton>{' '}
            <IconButton
              color="inherit"
              sx={{ ml: 2 }}
              onClick={() => {
                window.open(
                  'https://github.com/AbhishekAglave/assiduus-assignment-react.js.git',
                  '_blank'
                );
              }}
            >
              <GitHub />
            </IconButton>
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
              keepMounted: true
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
            padding: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            minHeight: '100vh',
            '@media (max-width:480px)': {
              paddingLeft: 0,
              paddingRight: 0
            }
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/accounts" element={<DashboardScreen />} />
            <Route path="/payroll" element={<DashboardScreen />} />
            <Route path="/reports" element={<DashboardScreen />} />
            <Route path="/advisor" element={<DashboardScreen />} />
            <Route path="/contacts" element={<DashboardScreen />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
