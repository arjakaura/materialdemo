import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles({
    image: {
        height: 250,
        float: 'left',
        padding: '25px 25px 0 0'

    },
    text: {
        padding: '25px 0 25px 0'
    }
});

const Link1 = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/" {...props} />
));


const Post = ({ match, data }) => {
    const classes = useStyles();
    let post = data.find(p => p.id == match.params.postId);
    return (
        <div>
            <div style={{ margin: 150, paddingTop: 50 }}>
                <Typography variant="caption">Post #{post.id}</Typography>
                <Typography variant="h2">{post.title}</Typography>
                <img className={classes.image} src={post.image} alt={post.title}/>
                <Typography variant="body1" className={classes.text}>
                    {post.text}
                </Typography>
                <Button variant="outlined" component={Link1}>Home</Button>    
            </div>
        </div>
    );
};







export default Post;