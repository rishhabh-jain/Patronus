import React from 'react'
import AddAdoptPost from './AddAdoptPost'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import AdoptPosts from './AdoptPosts';

const useStylesM = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop : '70px'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    svg : { 
        width : '100vw'
    },
    adopt : {
        backgroundColor : '#fff5f8'
    },
    fabButton: {
        position: 'sticky',
        zIndex: 1,
        bottom : theme.spacing(2),
        left : theme.spacing(2),
        margin: '0 auto',
      },
      appBar: {
        position: 'relative',
      },
  }));
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop : '120px'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    svg : { 
        width : '100vw'
    },
    adopt : {
        backgroundColor : '#fff5f8'
    },
    fabButton: {
        position: 'sticky',
        zIndex: 1,
        bottom : theme.spacing(2),
        left : theme.spacing(2),
        margin: '0 auto',
      },
      appBar: {
        position: 'relative',
      },
      fabButtonM : {
          display : 'flex ',
          justifyContent : 'center' ,
            position: 'sticky',
            zIndex: 1,
            bottom : theme.spacing(8),
            right: 0,
            margin: '0 auto',
      }
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function Profile() {
    const matches = useMediaQuery('(max-width:450px)');
    const classes = useStyles()
    const classesM = useStylesM()
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    if (matches){
        return(<div className={classesM.root}>
            
            <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
                Patronus
            </Link>
            <Typography color="textPrimary">Adopt</Typography>
            </Breadcrumbs>
            <div className={classes.adopt}>
                <img  src="adopt.png" alt="dog image" className={classes.svg}/>
                <h1></h1>
                <AdoptPosts/>
            </div>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen} className={classes.fabButtonM}>
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
                    
                </Toolbar>
                </AppBar>
                <AddAdoptPost/>
            </Dialog>
        </div>)
    }
    return (
        <div className={classes.root}>
            
            <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
                Patronus
            </Link>
            <Typography color="textPrimary">Adopt</Typography>
            </Breadcrumbs>
            <div className={classes.adopt}>
                <img  src="adopt.png" alt="dog image" className={classes.svg}/>
                <h1></h1>
                <AdoptPosts/>
            </div>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen} className={classes.fabButton}>
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
                    
                </Toolbar>
                </AppBar>
                <AddAdoptPost/>
            </Dialog>
        </div>
    )
}

export default Profile
