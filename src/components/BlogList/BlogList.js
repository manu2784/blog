import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import SingleBlog from "../SingleBlog/SingleBlog";



function BlogList(props){
    return(
    <Container>
        
        <SingleBlog posts={props.posts}/>
     
     </Container>
    )
}

export default BlogList;