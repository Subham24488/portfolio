import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: "fixed",
    top: 0,
    marginRight: 0,
    width: "100%",
    display: "flex",
    height: "40px",
    background: "rgba(0, 0, 0, 0.6)",
    transitionTimingFunction: "ease-out",
    transition: 0.6,
    zIndex: 1,
  },
  backLink: {
    marginLeft: "0.25rem",
  },
  backButton: {
    color: "#e4f9ff",
  },
  text: {
    color: "white",
    marginTop: "10px",
    marginLeft: "4px",
    marginRight: 0,
  },
}));

//getting the SVG icon-----------------------------------------
function Home(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const HomeIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Link to="/" className={classes.backLink}>
        <Home
          fontSize="large"
          className={classes.backButton}
          color="secondary"
        />
      </Link>
      <Typography className={classes.text}>Home</Typography>
    </div>
  );
};

export default HomeIcon;
