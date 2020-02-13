import React, {useState} from "react";
import { Container, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SearchForm from "./components/SearchForm/SerachForm";
import PostContext from "./context/post-context";

// CSS-in-JSS
const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 20
  },
  home: {
    color: "white",
    textDecoration: "none"
  },
  largeIcon: {
    verticalAlign: "text-bottom",
    marginRight: "5"
  }
});



function App() {
  const classes = useStyles();
  const [posts, setPost] = useState([]);
  const value = {posts, setPost};

  return (
    <PostContext.Provider value={value}>
      <Container fixed classes={{ root: classes.root }}>
        <AppBar position="fixed">
          <Container fixed>
            <Toolbar>
              {/*<Link to="/" className={classes.home}> */}
                <HomeIcon className={classes.largeIcon} />
                Home
              
            </Toolbar>
          </Container>
        </AppBar>
        <SearchForm/>
     
      </Container>
      </PostContext.Provider>
  );
}

export default App;