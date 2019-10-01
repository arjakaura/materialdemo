import React from 'react';
import { makeStyles } from '@material-ui/core/Styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: 200,
        padding: 25,
        minHeight: "100vh",
        marginLeft:30
            },
   
}));


const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>Contact:</h3>
            <h1>On the road</h1>
            <p>Klkölköj 2019</p>
            <p> 12345 BEACH</p>              
       
            
            <Button variant="outlined" color="primary">Home</Button>


            </div>   
    );
}





export default Contact;