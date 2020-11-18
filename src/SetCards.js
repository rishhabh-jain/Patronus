import React from 'react'
import './setcards.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import SkeletonCard from './SkeletonCard'
import Grid from '@material-ui/core/Grid';
import Cardjs from './Cardjs.js';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
      },
      media: {
        height: 190,
      },
      margin : {
        marginBottom : '30px'
      },
      root : {
          display : 'flex',
          flexDirection : 'row',
          justifyContent : 'space-between'
      }
  }));
function SetCards({items , loading}) {
    const classes = useStyles();
    return loading ? (
        <Grid container justify="center" spacing={5}>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
            <Grid item  justify="center">
                <SkeletonCard/>
            </Grid>
        </Grid>
    ) : (
        <div >
            <Grid container justify="center" justify={"space-evenly"}>
                {items.map(item => (
                    <Grid item  justify="center" className={classes.margin}>
                        <Cardjs item={item} isLoading={loading}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default SetCards
