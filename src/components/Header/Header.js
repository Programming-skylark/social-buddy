import React from 'react';
import './Header.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import bg from '../../img/simple-background-waveforms-purple-wallpaper.jpg';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundImage:`url(${bg})`,
     
    },
    menuButton: {
      marginRight: theme.spacing(2),
      float: "left"
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" classes={{root: classes.root,}}>
                
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/allPosts"><Avatar alt="Remy Sharp" src="https://i.ibb.co/LZw36mJ/Lovepik-com-400298856-english-letter-p-font-design.png" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    POST BOOK
                    </Typography>
                    <Button color="inherit" href="/allPosts">All POSTS</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;