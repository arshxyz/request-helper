import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShareIcon from '@material-ui/icons/Share';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 0 2rem 0",
  },
  menuButton: {
    margin: theme.spacing(0, 2, 0, 0),
  },
  title: {
    flexGrow: 1,
  },
  desktopMenuItems: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  fullList: {
    width: "250px",
  
  }

}));

const menuItems = [
  {title: "Share Request", action: "test", icon: <ShareIcon/>},
  {title: "My Requests", action: "test", icon: <AssignmentIcon/>},
]


export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const desktopMenuItems = (
    <div className={classes.desktopMenuItems}>
      {menuItems.map((item) => (
        <Button  variant="contained" className={classes.menuButton} key={item.title} endIcon={item.icon}>{item.title}</Button>

      ))}
      
    </div>
  )

  const mobileDrawer = (
    <Drawer open={drawerOpen} onClose={() => {setDrawerOpen(false)}} className={classes.fullList}>
            <div className={classes.fullList}>
          <List>
        {menuItems.map((item) => (
          <ListItem button key={item}>
            <ListItemIcon>
            {item.icon}
          </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      </div>
          </Drawer>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden mdUp>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {setDrawerOpen(true)}}>
            <MenuIcon />
          </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            cURLBin
          </Typography>
          {mobileDrawer}
          {desktopMenuItems}
          <Button color="inherit" variant="outlined" className={classes.menuButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}