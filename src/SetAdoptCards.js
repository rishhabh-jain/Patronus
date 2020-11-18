import React from 'react'
import './setcards.css'
import { makeStyles } from '@material-ui/core/styles';
import SkeletonCard from './SkeletonCard'
import Grid from '@material-ui/core/Grid';
import AdoptCard from './AdoptCard';

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
function SetAdoptCards({items , loading}) {
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
                        <AdoptCard item={item} isLoading={loading}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default SetAdoptCards