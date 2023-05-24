import { Outlet, Link, Navigate } from "react-router-dom";
import Logo from "../components/layout/logo";
import UserAvatar from "../components/mui components/UserAvatar";
import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import FindPool from '../components/layout/afterlogin/FindPool';
import {Toolbar,List,IconButton,Divider,Typography,CssBaseline,ListItemText,ListItemIcon,ListItemButton,ListItem} from '@mui/material';
import {Logout,EventAvailable,Menu, CheckCircle,PendingActions,Commute,TravelExplore,AccountCircle } from "@mui/icons-material";
import OfferPool from "../components/layout/afterlogin/OfferPool";
import { useNavigate } from "react-router-dom";

const AfterLoginLayout = () => {
    const navigate =useNavigate();

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
    
    
    const AppBar = styled(MuiAppBar, {
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
    
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme, open }) => ({
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
      }),
    );
    
      const theme = useTheme();
      const [open, setOpen] = useState(true);
    
      const handleDrawerOpen = () => {
        setOpen(!open);
      };
    
     
    return (
    <>
     <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={false} sx={{backgroundColor: open?'#c8e3ff':'#172121'} }>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(false && { display: 'none' }),
                }}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
            <Logo logo_type= {open ?'react':'light'} sx={{ m: 1, width:'120px' ,height:'120px' }}/>
              </Typography>
              
              <Logout sx={{marginLeft:'auto'}} onClick={()=>navigate('/')}/>

            </Toolbar>

          </AppBar>
          <Drawer variant="permanent" open={open} >
            
            <Box sx={{marginLeft:'20px',marginTop:'180px',...(!open && { display: 'none' })}}><UserAvatar userpic='../../assets/pic.jpeg'  sx={{ m: 1, width:'150px' ,height:'150px' }}/></Box>
            <Divider />

            <h3 style={{textAlign:'center',...(!open && { display: 'none' })}}>Umer Sher</h3>
            <Divider />
            <List sx={{...(!open && { marginTop:'180px' })}}>
             
                <ListItem  disablePadding sx={{ display: 'block' }}  onClick={()=>navigate('/dashboard/profile')}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color:'#1c7293'
                      }}
                    >
                    <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Profile" sx={{ opacity: open ? 1 : 0 ,}} />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding sx={{ display: 'block' } } onClick={()=>navigate('/dashboard/')}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color:'#1c7293'
                      }}
                    >
                     <EventAvailable />
                    </ListItemIcon>
                    <ListItemText primary="Available Rides" sx={{ opacity: open ? 1 : 0 }}  />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/dashboard/findpool')} >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color:'#1c7293'
                      }}
                    >
                     <TravelExplore />
                    </ListItemIcon>
                    <ListItemText primary="Find Pool" sx={{ opacity: open ? 1 : 0 }}  />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding sx={{ display: 'block' } } onClick={()=>navigate('/dashboard/offerpool')}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color:'#1c7293'
                      }}
                    >
                     <Commute />
                    </ListItemIcon>
                    <ListItemText primary="Offer Pool" sx={{ opacity: open ? 1 : 0 }}  />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color:'#1c7293'
                      }}
                    >
                     <CheckCircle />
                    </ListItemIcon>
                    <ListItemText primary="Approve Ride" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color:'#1c7293'
                      }}
                    >
                     <PendingActions />
                    </ListItemIcon>
                    <ListItemText primary="Pending Ride" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
            </List>
           
          </Drawer>
          
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3,marginTop:'160px'}}>
          <Outlet />
          </Box>
    </>
  )
};

export default AfterLoginLayout;