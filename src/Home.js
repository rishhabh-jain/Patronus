import React from 'react'
import Button from '@material-ui/core/Button';
import Slider from './Slider.js'
import Header from './Header.js'
import Posts from './Post.js'
import AddPost from './AddPost'
import AddIcon from '@material-ui/icons/Add';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Footer from './Footer'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles( (theme) => ({
    root: {
      flexGrow: 1,
      top: 'auto',
      bottom: 0,
      display : 'flex',
      alignItems : 'center'
    },
    appBar: {
        position: 'relative',
      },
    fabButton: {
      position: 'sticky',
      zIndex: 1,
      bottom : theme.spacing(2),
      left : theme.spacing(2),
      margin: '0 auto',
    },
    paper : {
        color : 'primary'
    },
    tab : {
        minWidth : '100px'
    },
    title: {
        marginLeft: '20px',
        flex: 1,
      },
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Home() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <header>
                 <Slider/>
                <Posts/>
                <Fab color="secondary" aria-label="add" onClick={handleClickOpen} className={classes.fabButton}>
                        <AddIcon />
                </Fab>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Add Post
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                    </AppBar>
                    <AddPost/>
                </Dialog>
            </header>
        </div>
    )
}

export default Home
