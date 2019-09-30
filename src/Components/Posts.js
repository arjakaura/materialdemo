import React from 'react';
import {Card, CardActions, CardMedia, CardContent, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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

const posts = [
    {
        title: "Thailand",
        image: "https://www.rantapallo.fi/wp-content/uploads/2019/03/thaimaa-phuket-ranta-veneet-ss.jpg",
        text: "lorem ipsum",
        url: "https://www.rantapallo.fi/thaimaa/",
        id:1
    },
    {
        title: "Vietnam",
        image: "https://www.rantapallo.fi/wp-content/uploads/2017/05/Vietnam-halonginlahti-is.jpg",
        text: "lorem ipsum",
        url: "https://www.rantapallo.fi/vietnam/",
        id:2

    },

    {
        title: "Singapore",
        image: "https://www.rantapallo.fi/wp-content/uploads/2010/07/Singapore-yomaisema-is.jpg",
        text: "lorem ipsum",
        url: "https://www.rantapallo.fi/singapore/",
        id:3
    }
]


const Posts = () => {
    return (
        <div style={{marginTop:150, padding:50, backgroundColor:"#F2EFFB"}}>
            <Grid container
                 direction="row" 
                 justify="center" 
                 alignItems="center"
                 spacing={2}>

                {posts.map(postitem => (
                    <Grid item xs={12} md={4}>
                        <Card key={postitem.id}>
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
                                <Button variant="outlined" color="primary" href={postitem.url}>Read more</Button>
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