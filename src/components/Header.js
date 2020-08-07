import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import shy from "../shy.jpg";
import Typed from "react-typed";
import Particles from "react-particles-js";

//styles-----------------------------------------------
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tan",
  },
  subtitle: {
    color: "#fbe6d4",
    marginBottom: "3rem",
  },
  typedContainer: {
    marginLeft: "50%",
    marginRight: "50%",
  },
  particleCanva: {
    position: "fixed",
    width: "100%",
    opacity: 0.2,
    height: "100%",
    objectFit: "contain",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Particles
        className={classes.particleCanva}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "white",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
      <Box className={classes.mainContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={shy} alt="subham-Chowdhury" />
        </Grid>

        <Typography variant="h4" align="center" className={classes.title}>
          <Typed strings={["Subham Chowdhury"]} typeSpeed={40} />
        </Typography>
        <br></br>
        <Typography variant="h5" align="center" className={classes.subtitle}>
          <Typed
            strings={["A", "Modern WEB Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    </>
  );
};

export default Header;
