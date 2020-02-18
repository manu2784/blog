import React, {useState} from "react";
import { Container, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SearchForm from "./components/SearchForm/SerachForm";
import BlogList from "./components/BlogList/BlogList";

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


  const [subRedit, setSubredit] = useState("");

  const getPosts = () => {
    if(subRedit){
    let url =  "https://www.reddit.com/r/"+subRedit+".json";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setPost(res.data.children.sort((a, b)=> a.data.created < b.data.created));
      })
    }
  };
  
  const setSub = e => {
    setSubredit(e.target.value);
  };

  return (
  
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
        <SearchForm getPosts={getPosts} setSub={setSub}/>
        { posts.length>0 &&
         <BlogList posts={posts}/>
        }
      </Container>
    
  );
}

export default App;