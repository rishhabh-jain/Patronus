import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from './Slider.js'
import {BrowserRouter ,Route ,Switch , Redirect , Link} from 'react-router-dom'
import Header from './Header.js'
import MyAccount from './MyAccount.js'
import axios from 'axios'
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
  const [pitems, setPitems] = useState([])
  const [items, setItems] = useState([])
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  useEffect(()=> {
    const fetchItems = async () =>{
      const result = await axios(`http://localhost:5000/auth/login/success`, {withCredentials:true})
      if(result.data.name != null ){
        setAuthenticated(true)
        setImage(result.data.name.image)
        setName(result.data.name.firstName)
        const pitems = await axios(`http://localhost:5000/rescue/getposts/${result.data.name._id}`)
        setPitems(pitems)
        console.log(result.data.name._id)
    }
    const items = await axios(`http://localhost:5000/rescue/getposts/`)
    console.log(items.data)
    setItems(items.data)
    setLoading(false)
    }
    fetchItems()
  }, [])
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:450px)');
  if ( matches && authenticated){
    return(
       <div>
        <PatronusM/>
        </div>
    );
  }
  if ( !authenticated){
    return( 
      <div>
      <Header authenticated={authenticated} />
      <h1 style={{ paddingTop : '80px' , minHeight : '60vh' , textAlign : 'center'}}> Please login to see the posts</h1>
      <Footer/>
      </div>
    )
  }
  return (
    <div >
      {/* <header className={classes.root}>
        <Header/>
        <Slider/>
        <Posts/>
        <Footer/>
      </header> */}
      
      <Header authenticated={authenticated} image={image} name={name}/>
        <Switch>
                <Route path="/myaccount" component={() => <MyAccount items={pitems}/>} exact />
                <Route path="/" component={() => <Home items={items} loading={loading}/>} exact />
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
