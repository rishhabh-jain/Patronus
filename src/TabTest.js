import React from 'react';
import {BrowserRouter ,Route ,Switch , Redirect , Link} from 'react-router-dom'
import Profile from './Profile'
import Button from '@material-ui/core/Button';
import Help from './Help'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import Donate from './Donate.js'
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Post from './Post.js';
import AddPost from './AddPost';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    top: 'auto',
    bottom: 0,
    display : 'flex',
    alignItems : 'center'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  paper : {
      color : 'primary'
  },
  tab : {
      minWidth : '100px'
  }
});

export default function CenteredTabs(){
    const classes = useStyles();
  const routes= ["/posts" ,"/donate" , "/profile", "/help"]
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
      <div>
          <BrowserRouter>
          <Route path="/" render={(history) => 
        <AppBar className={classes.root}> 
        <Toolbar >
            <Paper className={classes.paper}>
                <Tabs
                value={history.location.pathname}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                    <Tab className={classes.tab} value={routes[0]} icon={<HomeIcon />} component={Link} to={routes[0]}/>
                    <Tab  className={classes.tab} value={routes[1]} icon={< LocalAtmIcon />} component={Link} to={routes[1]}/>
                    <Tab className={classes.tab} value={routes[2]} icon={< AccountCircleIcon />} component={Link} to={routes[2]}/>
                    <Tab className={classes.tab} value={routes[3]} icon={< HelpIcon />} component={Link} to={routes[3]}/>
                </Tabs>
            </Paper>
        </Toolbar>
        <Fab color="secondary" aria-label="add" onClick={handleClickOpen} className={classes.fabButton}>
                <AddIcon />
        </Fab>
    </AppBar>
    }/> 
        <Switch>
            <Redirect exact from="/" to="/posts"/>
            <Route path="/posts" component={Post}/>
            <Route path="/donate" component={Donate}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/help" component={Help}/>
        </Switch>
    </BrowserRouter>
    <Dialog open={open} fullscreen onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Upload Post</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Upload Post
          </DialogContentText> */}
          <AddPost/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} alignItems="left" color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  );
}