import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop : '120px',
    },
    paper : {
        width : '300px ',
    },
    heading: {
      fontSize: theme.typography.pxToRem(25),
      fontWeight: theme.typography.fontWeightBold,
      minHeight : '120px'
    },
    pincode: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightLight,
      },
      location : {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightNormal,
        minHeight : '100px'
      },
      number: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightLight,
      },
    svg : { 
        width : '100vw'
    },
    adopt : {
        backgroundColor : '#fff5f8'
    }
  }));

function PList({items}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
           <Paper elevation={4} className={classes.paper}> 
               <Typography className={classes.heading}>
                   {items.ngoname}
               </Typography>
               <Typography className={classes.location}>
                   {items.location}
               </Typography>
               <Typography className={classes.number}>
                   Ph. Number - {items.number}
               </Typography>
               <Typography className={classes.pincode} >
                   Pincode - {items.pincode }
               </Typography>
           </Paper>
        </div>
    )
}

export default PList
