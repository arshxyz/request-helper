import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import ShareIcon from "@material-ui/icons/Share";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { MobileDrawer } from "./MobileDrawer";
import { DesktopMenuItems } from "./DesktopNavItems";
import TransitionsModal from "../Modal/MainModal";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 0 2rem 0",
  },
  menuButton: {
    margin: theme.spacing(0, 2, 0, 0),
  },
  rightButton: {
    margin: theme.spacing(0, 0, 0, 2),
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
}));

export default function ButtonAppBar({ curlState }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [modalType, setModalType] = useState("share");
  const classes = useStyles();
  const menuItems = [
    {
      title: "Share Request",
      action: () => {
        if(!curlState.result) {
          toast.error("Convert a valid request to share!");
          return;
        }
        setDrawerOpen(false);
        setModalType("share");
        setSaveModal(true);


      },
      icon: <ShareIcon />,
    },
    {
      title: "About",
      action: () => {
        setSaveModal(true);
        setDrawerOpen(false);
        setModalType("about");
      },
      icon: <AssignmentIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <TransitionsModal
        {...{ saveModal, setSaveModal, modalType, curlState }}
      />
      <AppBar position="static">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={() => {
                setDrawerOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            cURLBin
          </Typography>
          <MobileDrawer
            {...{ menuItems }}
            open={drawerOpen}
            onClose={() => {
              setDrawerOpen(false);
            }}
          />
          <DesktopMenuItems {...{ menuItems }} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
