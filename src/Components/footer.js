import React from 'react';
import TexField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { List, ListItem, ListItemText, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';
import { FormGroup, Button } from '@material-ui/core';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
        padding: 25,
        borderRadius: 25,
       backgroundColor: "#bfaadd"
    },

    listitem: {
        color: "#305792",
        marginTop: 100,
    },

    list: {
        backgroundColor: "#F2EFFB"
    },

    button: {
        marginTop: 100,
    },

});

const listitems = [
    {
        text: "Good to know",
        url: "https://www.rantapallo.fi/me-teemme-rantapallon/",
        id: 5
    },
    {
        text: "Archive",
        url: "https://www.rantapallo.fi/artikkelit/",
        id: 6
    },

]


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.list}>
            <Grid container className={classes.list}>
                <Grid item xs={6}>
                    <List>
                        {listitems.map(item => (
                            <ListItem className={classes.listitem} key={item.id} >
                                <ListItemText>
                                    <Typography>{item.text}</Typography>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Grid >
                <Grid item xs={6}>
                        <form className={classes.root}>
                            <Typography variant="subtitle1">I want more information</Typography>
                            <TexField fullWidth margin="normal" label="First name" />
                            <TexField error fullWidth margin="normal" label="Last name" />
                            <TexField fullWidth margin="normal" label="Email" type="email" />
                            <TexField fullWidth margin="normal" label="Phone" Type="phone" />
                            <TexField fullWidth margin="normal" label="Password" Type="password" />

                            <Typography variant="subtitle1">Subject</Typography>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="thailand" control={<Radio />} label="Thailand" />
                                <FormControlLabel value="vietnam" control={<Radio />} label="Vietnam" />
                                <FormControlLabel value="singapore" control={<Radio />} label="Singapore" />
                            </RadioGroup>


                            <FormControl>
                                <FormLabel component="label">Subscription</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="primary" />}
                                        label="Travel magazine"
                                        labelPlacement="end"
                                    />

                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="primary" />}
                                        label="Special offers"
                                        labelPlacement="end"
                                    />
                                </FormGroup>
                            </FormControl>
                            <Button variant="contained" color="primary" className={classes.button}>Submit</Button>
                        </form>
                    </Grid>
                </Grid>
        </div>
            );
        };

export default Footer;