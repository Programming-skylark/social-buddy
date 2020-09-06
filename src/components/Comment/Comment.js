import React, { useEffect, useState } from 'react';



import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Photo from '../Photo/Photo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


const Comment = (props) => {
    const classes = useStyles();
    const{email , name, body} = props.comment;
    

  
    return (
        <List className={classes.root}>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>       
                <Photo></Photo>
                </ListItemAvatar>
                <ListItemText
                primary={name}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {email}
                    </Typography>
                    <br/>
                    {body}
                    </React.Fragment>
                }
                />
            </ListItem>
        <Divider variant="inset" component="li" />
        
        </List>
    )
};

export default Comment;