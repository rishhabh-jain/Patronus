import './App.css';
import Slider from './Slider.js'
import {BrowserRouter ,Route ,Switch , Redirect , Link} from 'react-router-dom'
import Header from './Header.js'
import Posts from './Post.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Partners from './Partners'
import Footer from './Footer.js'
import PatronusM from './PatronusM'
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home'
import Post from './Post'
import Profile from './Profile'
import Donate from './Donate'
import Help from './Help'
const useStyles = makeStyles((theme) => ({
  root: {
      display : 'flex',
      flexDirection : 'column'
    }
}));

function App() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:450px)');
  if ( matches){
    return(
       <div>
        <PatronusM/>
        </div>
    );
  }
  return (
    <div >
      {/* <header className={classes.root}>
        <Header/>
        <Slider/>
        <Posts/>
        <Footer/>
      </header> */}
      
      <Header/>
        <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/adopt" component={Profile} />
                <Route path="/donate" component={Donate}/>
                <Route path="/help" component={Help} />
                <Route path="/partners" component={Partners}/>
                <Route component={Error} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
