import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#dd7631",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const ResumeDetails = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h2"
        className={` ${classes.timeLineYear} ${classes.timeLineItem} year `}
      >
        {props.year}
      </Typography>

      <Box key={props.id} component="div" className={classes.timeLineItem}>
        <Typography variant="h5" align="center" className={classes.subHeading}>
          {props.subHeading}
        </Typography>
        <Typography
          className="institution"
          variant="body1"
          align="center"
          style={{ color: "tomato" }}
        >
          {props.institution}
        </Typography>
        <Typography
          className="marks"
          variant="body1"
          align="center"
          style={{ color: "tan" }}
        >
          {props.marks}
        </Typography>
      </Box>
    </>
  );
};

export default ResumeDetails;
