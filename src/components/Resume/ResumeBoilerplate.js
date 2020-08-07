import React from "react";
import ResumeDetails from "./ResumeDetails";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button } from "@material-ui/core";
import details from "./Details";
import HomeIcon from "../HomeIcon";
// import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    background: "#0E2A2B",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",

    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  topContainer: {
    display: "flex",
  },
  heading: {
    color: "#fff",
    padding: "3rem 0",
    textTransform: "uppercase",
    letterSpacing: "15px",
    fontWeight: 600,
  },
  resumeLink: {
    background: "white",
    padding: 0,
    margin: 0,
  },
}));

//resumeBoilerplate-------------------------------
const ResumeBoilerplate = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainContainer} component="header">
        <HomeIcon />

        <Typography className={classes.heading} variant="h4" align="center">
          RESUME
        </Typography>

        {/* <Button
            variant="contained"
            color="primary"
            size="small"
            component="a"
            href="https://drive.google.com/file/d/11SmgF17j1VInLqMpi0Ot_0q4vtyp3iOm/view?usp=sharing"
            download
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button> */}

        <Box component="div" className={classes.timeLine}>
          {details.map((Items, i) => (
            <ResumeDetails
              id={i}
              year={Items.Year}
              subHeading={Items.SubHeading}
              institution={Items.Institution}
              marks={Items.Marks}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ResumeBoilerplate;
