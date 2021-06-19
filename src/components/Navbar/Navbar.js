import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import  Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 0 2rem 0",
  },
  menuButton: {
    margin: theme.spacing(0, 1),
  },
  title: {
    flexGrow: 1,
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            cURLBin
          </Typography>
          <Hidden mdDown>
          <Button color="inherit" variant="outlined" className={classes.menuButton}>My Requests</Button>
          </Hidden>
          <Button color="inherit" variant="outlined" className={classes.menuButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}