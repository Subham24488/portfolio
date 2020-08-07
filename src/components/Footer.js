import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Container } from "@material-ui/core";
import { LinkedIn, Facebook, Twitter } from "@material-ui/icons";

const useStyles = makeStyles({
  mainContainer: {
    position: "absolute",

    bottom: 0,

    objectFit: "contain",
    width: "100%",
  },
  icon: {},
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Container
      width="auto"
      className={classes.mainContainer}
      style={{ background: "#e4f9ff", padding: 0 }}
    >
      <div>
        <Button>
          <a
            href="https://www.facebook.com/subham.chowdhury.982"
            target="_blank"
          >
            <Facebook style={{ color: "#092532" }} fontSize="large" />
          </a>
        </Button>

        <Button>
          <a
            href="https://www.linkedin.com/in/subham-chowdhury-125525149/"
            target="_blank"
          >
            <LinkedIn style={{ color: "#092532" }} fontSize="large" />
          </a>
        </Button>

        <Button>
          <a href="https://twitter.com/subhamc92977052" target="_blank">
            <Twitter style={{ color: "#092532" }} fontSize="large" />
          </a>
        </Button>
      </div>
    </Container>
  );
};

export default Footer;
