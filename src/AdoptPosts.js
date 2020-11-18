import React , {useState , useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import SetAdoptCards from './SetAdoptCards'
import Card from './Cardjs.js'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Cardjs from './Cardjs.js';

const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow : 1,
        
    }
  }));
function AdoptPosts() {
    const classes = useStyles();
    const [items , setItems ] = useState([]);
      const [loading , setLoading ] = useState(true)
    useEffect(()=> {
      const fetchItems = async () =>{
        const result = await axios(`https://patronusapi.herokuapp.com/adopt/getposts/`)
        console.log(result.data)
        setItems(result.data)
        setLoading(false)
      }
      fetchItems()
    }, [])
    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={12} sm={4}>
              <Cardjs />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Cardjs/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Cardjs/>
            </Grid>
          </React.Fragment>
        );
      }

    return (
        <div className={classes.root}>
            <SetAdoptCards items={items} loading={loading}/>
            {/* <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1} align="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1} align="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1} align="center" >
                    <FormRow />
                </Grid>
            </Grid> */}
        </div>
    )
}

export default AdoptPosts