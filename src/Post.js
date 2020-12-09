import React , {useState , useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import SetCards from './SetCards'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from './Cardjs.js'
import axios from 'axios'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Cardjs from './Cardjs.js';
import Button from '@material-ui/core/Button';
import AddPost from './AddPost';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow : 1,
        
    },
    fabButton: {
      zIndex: 1,
      display : 'flex ',
      justifyContent : 'center' ,
        position: 'sticky',
        bottom : theme.spacing(8),
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));
function Post({items , loading}) {
  const matches = useMediaQuery('(max-width:450px)');
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    // useEffect(()=> {
    //   const fetchItems = async () =>{
    //     const result = await axios(`https://patronusapi.herokuapp.com/rescue/getposts/`)
    //     console.log(result.data)
    //     setItems(result.data)
    //     setLoading(false)
    //   }
    //   fetchItems()
    // }, [])
    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={12} sm={4}>
              <Cardjs />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Cardjs/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Cardjs/>
            </Grid>
          </React.Fragment>
        );
      }
      if ( matches ){
        return(
          <div className={classes.root}>
            <SetCards items={items} loading={loading}/>
            {/* <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1} align="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1} align="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1} align="center" >
                    <FormRow />
                </Grid>
            </Grid> */}
            <Fab color="secondary" aria-label="add" onClick={handleClickOpen} className={classes.fabButton}>
                <AddIcon />
        </Fab>
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
        )
      }
    return (
        <div className={classes.root}>
            <SetCards items={items} loading={loading}/>
            {/* <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1} align="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1} align="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1} align="center" >
                    <FormRow />
                </Grid>
            </Grid> */}
        </div>
    )
}

export default Post
