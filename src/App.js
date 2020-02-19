import React, {useState} from "react";
import { Container, AppBar, Toolbar, TablePagination } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SearchForm from "./components/SearchForm/SerachForm";
import BlogList from "./components/BlogList/BlogList";
import Pagination from "./components/Pagination/Pagination";

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
  },
    paginate:{
    width:"100%",
        margin:"5px"
    }
});



function App() {
  const classes = useStyles();
  const [posts, setPost] = useState([]);
    const [page, setPage] = useState(1);


  const [subRedit, setSubredit] = useState("");

  const getPosts = () => {
    if(subRedit){
    let url =  "https://www.reddit.com/r/"+subRedit+".json";
    fetch(url)
      .then(res => res.json())
      .then(res => {

        // sorting posts
          if(res.data.children.length>0)
        setPost(res.data.children.sort((a, b)=> a.data.created < b.data.created));
      }).catch(e=>console.log(e))
    }
  };
  
  const setSub = e => {
    setSubredit(e.target.value);
  };

  const getDisplayPosts = ()=>{
return posts.slice((page-1)*10, (page * 10));
    }

const handleChangePage = (dir) => {
if(dir==="up" && page < Math.ceil(posts.length/10)){
  setPage(page+1);
}

if(dir === "down" && page> 1) {
setPage(page-1)}
}

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

          { posts.length>0 && <Pagination handler={handleChangePage}/>}

        { posts.length>0 &&
         <BlogList posts={getDisplayPosts()}/>
        }
          { posts.length>0 && <Pagination handler={handleChangePage}/>}
      </Container>
    
  );
}

export default App;