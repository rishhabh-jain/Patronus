import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TabTest from './TabTest'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    title: {
        flexGrow: 1,
        textTransform: 'capitalize',
        color : 'black ',
        fontWeight : "bold" ,
        fontSize : 18,
        fontFamily : 'Helvetica'
    }
  }));
  
function HeaderM() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
             <AppBar position="fixed"  backgroundcolor="white">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Patronus
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <TabTest/>
        </div>
    );
}


export default HeaderM
