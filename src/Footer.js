import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const styles = makeStyles((theme)=> ({
    root : {backgroundColor: 'pink',
    borderTop : '0px solid black ',
    marginTop : '40px',
    display : 'flex'
    },
    image : {
        maxWidth: 400,
        maxHeight : 300,
        padding : 0 ,
        marginTop : -20,
        marginBottom  : -20,
    },
    copyright : {
        fontWeight : 'bold'
    }
}));
function Footer() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <img src="PatronusFull.png" alt="logo" className={classes.image}/>
            <p className={classes.copyright}> {'© '} Patronus 2020 </p>
            {/* <Grid container >
                <Grid item xs={12}>
                    <Button>
                        Our NGO Partners
                    </Button>
                </Grid>
                <Grid  item xs={12}>
                    ...
                </Grid>
            </Grid> */}
        </div>
    )
}

export default Footer
