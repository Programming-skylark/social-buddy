import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import bg from '../../img/simple-background-waveforms-purple-wallpaper.jpg';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      width:'30%',
      float: 'left',
      margin: '20px',
      paddingBottom: '10px',
      boxShadow: '5px 10px 15px grey',
      border: '1px solid purple',
      
    },
    moreButton:{
      backgroundImage:`url(${bg})`,
    },
    main:{
      height: '300px',
    },
    
  });
  

const Post = (props) => {
    const {title, body, id} = props.post;
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardContent className={classes.main}>
                  <h2 style={{color: "#e6b800"}}>Title:</h2>
                  <h3> {title}</h3>
                  <p>{body}</p>
                 
                </CardContent>
                <hr style={{border: "1px solid #e6b800"}}/>
                <CardActions>
                        <Link to={`/post/${id}`}>
                        <Button classes={{root: classes.moreButton}} variant="contained" color="primary">Read More..</Button>
                    </Link>
                </CardActions>
              </Card>
            
        </div>
    );
};

export default Post;