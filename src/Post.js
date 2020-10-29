import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from './Cardjs.js'
import { makeStyles } from '@material-ui/core/styles';
import Cardjs from './Cardjs.js';

const useStyles = makeStyles((theme) => ({
    column : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    row : {
        display : 'flex',
        justifyContent : 'space-between',
    },
    gridContainer :{
        paddingLeft :"20px" 
    },
    root: {
      flexGrow: 1,
      paddingLeft : '100px',
      maxWidth : '100%'
    }
  }));
function Post() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1> Animals near you </h1>
            <Grid container className={classes.row} spacing={4}>
                <Grid container item className={classes.column}>
                    <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                    <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                    <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                    <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                    <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                    <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                    <Grid item xs={4}>
                        <Cardjs/>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default Post
