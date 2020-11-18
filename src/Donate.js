import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stripejs from './Stripejs'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

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
    }
  }));
function Donate() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
                Patronus
            </Link>
            <Typography color="textPrimary">Donate</Typography>
            </Breadcrumbs>
            <img  src="wemust.png" alt="dog image" className={classes.svg}/>
            <Stripejs/>
        </div>
    )
}

export default Donate
