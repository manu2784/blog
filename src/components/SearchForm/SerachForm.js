import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  form: {
    width: "100%",
    marginTop: 70
  },

  inputRoot: {
    display: "inline-block",
    width: "70%",
    height: "3rem"
  },
  button: {
    width: "20%",
    display: "ineline-block",
    margin: "0 10px",
    height: "3.5rem",
    color: "white"
  }
}));

function SearchForm(props) {
  const classes = useStyles();



  return (
    <div>
      <form className={classes.form}>
        <TextField
          className={classes.inputRoot}
          classes={{ root: classes.innerRoot }}
          autoFocus
          type="text"
          onBlur={props.setSub}
          variant="outlined"
          fullWidth
          placeholder="Enter company symbol or name"
          required={true}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={props.getPosts}
          className={classes.button}
        >
          Get Data
        </Button>
      </form>
    </div>
  );
}

export default SearchForm;
