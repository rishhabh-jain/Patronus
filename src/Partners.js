import React ,{ useEffect , useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import PList from './PList'
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
  const products = [
    { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
    { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
    { name: 'Product 3', desc: 'Something else', price: '$6.51' },
    { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
    { name: 'Shipping', desc: '', price: 'Free' },
  ];
  const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
  ];
function Partners() {
    const [items, setItems] = useState([])
    useEffect(()=> {
        const fetchItems = async () =>{
          const result = await axios(`https://patronusapi.herokuapp.com/partners/getpartners/`)
          console.log(result.data)
          setItems(result.data)
        }
        fetchItems()
      }, [])
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
                Patronus
            </Link>
            <Typography color="textPrimary">Partners</Typography>
            </Breadcrumbs>
            <Grid container justify="center" justify={"space-evenly"}>
                {items.map(item => (
                    <Grid item  justify="center" className={classes.margin}>
                        <PList items={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Partners
