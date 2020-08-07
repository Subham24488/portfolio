import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import HomeIcon from "../HomeIcon";
import db from "../../firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    "&:hover": {
      backgroundColor: "#0E2A2B",
    },
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
    width: "100%",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const { name, email, message } = userInput;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return alert("Please enter a valid email");
    }

    if (!email || !name || !message) {
      alert("please enter all the fields");
    } else {
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
          sentAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((res) => {
          alert("Successfully sent, thank you.");
          setUserInput({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const classes = useStyles();

  return (
    <>
      <Box component="div" style={{ background: "#0E2A2B", height: "100vh" }}>
        <HomeIcon />

        <Grid container justify="center">
          <Box component="form" className={classes.form} autoComplete="off">
            <Typography
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
              variant="h4"
              align="center"
            >
              Get In Touch!
            </Typography>
            <br />
            <div style={{ color: "white" }}>
              <Typography component="span">
                email:subham.chowdhury.bksc@gmail.com
              </Typography>
              <br />
              <Typography component="span">Ph:7319368344</Typography>
            </div>
            <hr />
            <br />

            <InputField
              fullWidth={true}
              label="Name"
              required
              value={userInput.name}
              variant="outlined"
              name="name"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
              type="text"
              onChange={handleChange}
            />
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              required
              value={userInput.email}
              variant="outlined"
              name="email"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
              type="email"
              onChange={handleChange}
            />
            <br />
            <InputField
              fullWidth={true}
              label="Message"
              required
              value={userInput.message}
              variant="outlined"
              multiline
              rows={4}
              name="message"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
              type="message"
              onChange={handleChange}
            />
            <br />
            <Button
              className={classes.button}
              variant="outlined"
              onClick={submitForm}
              endIcon={<SendIcon />}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contacts;
