import React from 'react'
import TabTest from './TabTest'
import HeaderM from './HeaderM.js'
import Post from './Post.js'
import TabsM from './TabsM.js'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
    }));
  
function PatronusM() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HeaderM/>
        </div>
    )
}

export default PatronusM
