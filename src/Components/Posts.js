import React from 'react';
import {Card, CardActions, CardMedia, CardContent, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';

import postdata from './postdata';

import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    Card: {
        borderRadius:125,
        backgroundColor:"#F2EFFB",
    },

    backgroundColor: {
        backgroundColor:"#F2EFFB",
        borderRadius:125,
    },

    FavoriteIcon: {
        color:"inherit"
    }

}
);

const Posts = ({ match }) => {
    const classes =useStyles();
    const post = postdata;
   
    return (
        <div style={{marginTop:150, padding:50, backgroundColor:"#F2EFFB"}}>
            <Grid container
                 direction="row" 
                 justify="center" 
                 alignItems="center"
                 spacing={2}>

                {postdata.map(postitem => (
                    <Grid item xs={3}  key={postitem.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={postitem.title}
                                height="250"
                                image={postitem.image}
                            />
                            <CardContent>
                                <Typography variant="h4" color="primary">{postitem.title}</Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`${match.url}${postitem.id}`}>Read more</Link>
                                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />}/>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                    </Grid>               
                </div>
            )
        } 
        
        
        export default Posts;           