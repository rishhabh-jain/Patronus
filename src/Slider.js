import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
const useStyles = makeStyles((theme) => ({
    slider : {
        fill : 'contain'  
    }
  }));

function Slider() {
    const classes = useStyles();
    return (
        <div>
            <Carousel>
                <img src="1.png" alt="logo" className={classes.slider}/>    
                <img src="2.png" alt="logo" className={classes.slider}/>
                <img src="3.png" alt="logo" className={classes.slider}/>
            </Carousel>
        </div>
    )
}

export default Slider
