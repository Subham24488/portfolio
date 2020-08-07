import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import PortfolioDetais from "./PortfolioDetails";
import Details from "./Details";
import HomeIcon from "../HomeIcon";
import project7 from "../../images/API.jpeg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#0E2A2B",
    height: "100%",
  },
  row: {
    display: "flex",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <HomeIcon />

      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.row}
      >
        <PortfolioDetais
          projectNo="CHAT APP"
          aboutProject={[
            <p>A responsive real-time Chatt Application made with, </p>,

            <ul>
              <li>REACT</li>
              <li>Socket.io</li>
            </ul>,
            <h3>
              Run the SERVER before running the LIVE DEMO to see the project!
            </h3>,
          ]}
          image={project7}
          url="https://elastic-bose-d4d0d3.netlify.app/"
          server="https://chat-app24488.herokuapp.com/"
          isLargeRow
        />
        {Details.map((Items) => (
          <PortfolioDetais
            projectNo={Items.ProjectNo}
            aboutProject={Items.AboutProject}
            image={Items.Image}
            url={Items.url}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
