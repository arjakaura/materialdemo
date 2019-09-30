import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';

import MainNavigation from './Components/MainNavigation';
import Posts from './Components/Posts';
import Footer from './Components/footer';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding:25,
    background: "linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
  },
  list: {
    background: "green"
  },
  title: {
    flexGrow: 1
  },
  
  
});

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root}>
        <ToolBar>
        <Typography variant="h2" color="primary" className={classes.title}>
          Matkailua
        </Typography>
        <MainNavigation />
        </ToolBar>
      </AppBar>
      <Posts />
      <Footer />
    </div>
      
  );
};





export default App;
