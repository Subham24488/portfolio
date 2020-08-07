import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import { Home, Apps, ContactMail, AssignmentInd } from "@material-ui/icons";

//styles---------------------------------------------------

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    objectFit: "contain",
  },
  header: {
    position: "fixed",
  },
  menuSliderContainer: {
    width: drawerWidth,
    objectFit: "contain",
    backgroundImage: "linear-gradient(top, #0E2A2B, #c3edea)",
    height: "100%",
  },
  //#26403F
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  listItem: {
    color: "white",
  },
  menuButton: {
    marginRight: 5,
  },
  hide: {
    display: "none",
  },
  drawer: {
    overflowX: "hidden",
    overflowY: "hidden",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    overflowX: "hidden",
    overflowY: "hidden",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    overflowX: "hidden",
    overflowY: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listView: {
    paddingTop: "10%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
//array for iconns-----------------------------------------
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

//sidebar--------------------------------------------------

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar
          className={classes.topBar}
          style={{ background: "#0E2A2B" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              onClick={handleDrawerOpen}
              aria-label="open drawer"
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon style={{ color: "#bbe1fa" }} />
            </IconButton>
            <Typography
              varient="h5"
              style={{
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "5px",
                fontSize: "18px",
              }}
              noWrap
            >
              PORTFOLIO
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <AppBar style={{ background: "#e4f9ff" }}>
              <Toolbar>
                <IconButton
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: 0 }}
                >
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon style={{ color: "#092532" }} />
                  ) : (
                    <ChevronLeftIcon style={{ color: "#092532" }} />
                  )}
                </IconButton>
              </Toolbar>
            </AppBar>
          </div>
          <Divider />
          <Box className={classes.menuSliderContainer} component="div">
            <Divider />
            <List>
              {menuItems.map((lsItme, key) => (
                <ListItem
                  className={classes.listView}
                  button
                  key={key}
                  component={Link}
                  to={lsItme.listPath}
                >
                  <ListItemIcon className={classes.listItem}>
                    {lsItme.listIcon}
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary={lsItme.listText}
                  />
                </ListItem>
              ))}{" "}
              ;
            </List>
            <Footer />
          </Box>
          <Divider />
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Header />
        </main>
      </div>
    </>
  );
};

export default Navbar;
