import React from 'react';

import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  AppBar,
  Toolbar,
  Avatar,
} from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

import { format } from 'date-fns';

const drawerWidth = 240;

const MenuItems = [
  {
    path: '/',
    text: 'My Notes',
    icon: <SubjectOutlined color="secondary" />,
  },
  {
    path: '/create',
    text: 'Create Note',
    icon: <AddCircleOutlineOutlined color="secondary" />,
  },
];

const PageWrapper = styled(Box)(({ theme }) => ({
  background: '#f8f6f6c6',
  width: '100%',
  padding: theme.spacing(3),
}));

const CustomAppBar = styled(AppBar)({
  width: `calc(100% - ${drawerWidth}px)`,
});

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      {/* app bar */}
      <CustomAppBar elevation={0}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is {format(new Date(), 'do MMMM Y ')}
          </Typography>
          <Typography>Siam</Typography>
          <Avatar
            src="/mario.png"
            sx={{ marginLeft: (theme) => theme.spacing(2) }}
          />
        </Toolbar>
      </CustomAppBar>
      {/* app drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <div>
          <Typography variant="h6" sx={{ p: (theme) => theme.spacing(2) }}>
            YOYO Notes
          </Typography>
        </div>

        {/* List Link */}
        <List sx={{ padding: 0 }}>
          {MenuItems.map((item) => (
            <ListItem
              key={item.text}
              className={location.pathname === item.path ? 'active' : ' '}
            >
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <PageWrapper>
        <Box sx={{ marginTop: (theme) => theme.mixins.toolbar }}></Box>
        {children}
      </PageWrapper>
    </Box>
  );
};

export default Layout;
