import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
    Button
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShowMore from 'react-show-more';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles(theme => ({
  root: {
    width:"70%",
    margin: "15px 0px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
   vote:{
    fontSize:".8rem",
       margin:"0 4px"
   }
}));

function SingleBlog(props) {
  const classes = useStyles();

  function checkMedia(data) {
        let image = data.url.match(/\.(jpeg|jpg|gif|png)$/) != null;
        if(image) return "image";

        if(data.secure_media_embed.content)
          return "embeded_media";

        return "link";
    }
  return (
    <React.Fragment>
      {props.posts.map(post => (
        <Card className={classes.root} key={post.data.name}>
          <Button href={post.data.url} >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                  {post.data.author.charAt(0)}
              </Avatar>
            }
            title={post.data.title}
            subheader={new Date(post.data.created *1000).toISOString().split("T").join(" ").slice(0, -8)}
          /></Button>
            { checkMedia(post.data) === "image" && <CardMedia
            className={classes.media}
            image={post.data.url}
            title=""
          />}

            {checkMedia(post.data) === "embeded_media" &&
            <iframe src={post.data.secure_media_embed.media_domain_url} width={post.data.secure_media_embed.width} height={post.data.secure_media_embed.height}></iframe>
            }


          <CardContent>
            <ShowMore
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass=''
            >
            <Typography variant="body2" color="textSecondary" component="p">
            {post.data.selftext}
            </Typography>
            </ShowMore>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label=" vote score">
                <ThumbUpIcon /> <span className={classes.vote}> {post.data.score}</span>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </React.Fragment>
  );
}

export default SingleBlog;
