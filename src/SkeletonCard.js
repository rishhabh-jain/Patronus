import React from 'react'
import './setcards.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Cardjs from './Cardjs.js';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 345,
        margin: theme.spacing(2),
      },
      media: {
        height: 190,
      },
  }));
function SkeletonCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardHeader
            avatar={
                <Skeleton animation="wave" variant="circle" width={40} height={40} />
            }
            title= { <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
            subheader = {<Skeleton animation="wave" height={10} width="40%" />}
          />
          <Skeleton animation="wave" variant="rect" className={classes.media}/>
          <CardContent>
            <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
          </CardContent>
        </CardActionArea>
      </Card>
    ) 
}

export default SkeletonCard