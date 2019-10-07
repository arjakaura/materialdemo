import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import About from './Components/About'; 

import Posts from './Components/Posts';
import Contact from './Components/Contact';
import postdata from './Components/postdata';
import Post from './Components/post';

import MainNavigation from './Components/MainNavigation';
import Footer from './Components/footer';

import { makeStyles } from '@material-ui/styles';
import { fontFamily } from '@material-ui/system';




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
    flexGrow: 1,
    fontFamily:"Kristen ITC",
  },
  
  
});

const App = () => {
  const classes = useStyles();
  const posts = postdata;
  return (
    <div>
      <Router>
      <AppBar className={classes.root}>
        <ToolBar>
        <Typography variant="h3" color="primary" className={classes.title}>
          On the road...
        </Typography>
        <MainNavigation />
        </ToolBar>
      </AppBar>
      <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
          <Route path={`/:postId`} render={ (props) => <Post data = {posts} {...props} />}/>
          
        </Switch>
      
      <Footer />
      </Router>
    </div>
      
  );
};





export default App;
