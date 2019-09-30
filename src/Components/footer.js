import React from 'react';
import TexField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Radio from  '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { List, ListItem, ListItemText,Link} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



import { makeStyles } from '@material-ui/styles';
import { FormGroup, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 400,
        background: "#86A8E7",
        padding:25,
        borderRadius:25,  
        float: "right",
        marginRight: -500        
        
        
    },
        
    listitem: {
        float: "left",
        width: 150,
        textAlign: "left",
        color:"#305792",
        background: "#F2EFFB",
    },
    button:{
        marginTop: 100,  
    },

    body: {
        background:"primary",
    }
    
});

const listitems = [
    {
    text: "Yhteystiedot",
    url: "https://www.rantapallo.fi/me-teemme-rantapallon/",
    id:5
    },
    {
        text: "Artikkelit",
        url: "https://www.rantapallo.fi/artikkelit/",
        id:6
    },

]


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
         
            <Grid>
            <List>
                {listitems.map(item => (
                <ListItem className={classes.listitem} key={item.id} >
                    <ListItemText>
                        <link></link>
                        <Typography>{item.text}</Typography>
                        
                    </ListItemText>
                </ListItem> 
                ))}  
                     
            </List>
           </Grid>
            
            <Grid >
            <Grid item xs={6}>
                
            <form className={classes.root}>
                <Typography variant="subtitle1">I want more information</Typography>
                <TexField fullWidth margin="normal" label="First name" />
                <TexField error fullWidth margin="normal"label="Last name" />
                <TexField fullWidth margin="normal" label="Email" type="email" />
                <TexField fullWidth margin="normal" label="Phone" Type="phone"/>
                <TexField fullWidth margin="normal" label="Password" Type="password"/>   

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