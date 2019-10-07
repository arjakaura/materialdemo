import React from 'react';
import { makeStyles } from '@material-ui/core/Styles';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: 200,
        padding: 25,
        minHeight: "100vh"
    }

})); 

const Link2 = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/" {...props} />
));



const About = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <h1>This is ABOUT page</h1>

            <Button variant="outlined" component={Link2}>Home</Button> 
            
        </div>
    );
};









export default About;