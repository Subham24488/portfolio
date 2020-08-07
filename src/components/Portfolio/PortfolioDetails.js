import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  cardContainer: {
    maxWidth: 345,

    margin: "5rem auto",
  },
  liveButton: {
    "&:hover": {
      backgroundColor: "#6ebfb5",
    },
  },
  showLink: {
    visibility: "visible",
  },
  hideLink: {
    visibility: "hidden",
  },
});

const PortfolioDetails = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              className="image"
              component="img"
              alt="project 1"
              height="140"
              image={props.image}
            />
            <CardContent>
              <Typography className="projectNo" gutterBottom variant="h5">
                {props.projectNo}
              </Typography>
              <Typography
                className="aboutProject"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.aboutProject}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                component="a"
                href={props.url}
                target="_blank"
                className={classes.liveButton}
              >
                Live Demo
              </Button>

              <Button
                component="a"
                href={props.server}
                target="_blank"
                size="small"
                type="outlined"
                className={` ${classes.liveButton}
                    ${props.isLargeRow ? classes.showLink : classes.hideLink}`}
              >
                Server
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default PortfolioDetails;
