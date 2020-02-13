import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { blockStatement } from "@babel/types";
import PostContext from "../../context/post-context";

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

function SearchForm() {
  const classes = useStyles();

  const [posts, setPost] = useContext(PostContext);
  const [subRedit, setSubredit] = useState("");

  const getPosts = () => {
    if(subRedit){
    let url =  "https://www.reddit.com/r/"+subRedit+".json";
    fetch(url)
      .then(res => res.json())
      .then(res => console.log(res.data.children))
    }
  };
  
  const setSub = e => {
    setSubredit(e.target.value);
  };

  return (
    <div>
      <form className={classes.form}>
        <TextField
          className={classes.inputRoot}
          classes={{ root: classes.innerRoot }}
          autoFocus
          type="text"
          onBlur={setSub}
          variant="outlined"
          fullWidth
          placeholder="Enter company symbol or name"
          required={true}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={getPosts}
          className={classes.button}
        >
          Get Data
        </Button>
      </form>
    </div>
  );
}

export default SearchForm;
