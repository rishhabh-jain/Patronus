import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SelectCity from './SelectCity'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        //linear-gradient(45deg, #F5F7FA 30%, #B8C6DB 90%)
        borderRadius: 3,
        border: 0,
        '&:hover': {
           // backgroundColor: 'black',
        },
        height: 48,
        padding: '0 30px',
        //: '0 0px 4px 2px black',
      },
      link : {
        textDecoration : 'none'
      },
      label: {
        '&:hover': {
          
        },
        textTransform: 'capitalize',
        color : 'black ',
        fontWeight : "bold" ,
        fontSize : 17,
        fontFamily : 'Helvetica'
      },
      avatar : {
        width: theme.spacing(7),
    height: theme.spacing(7),
        paddingRight : '6px'
      },
    root: {
      flexGrow: 1,
      backgroundColor : 'white'
    },// menu button styling 
    left : {
        flex : 1,
        display : 'flex',
        alignItems : 'center'
    },
    right : {
        display: 'flex',
        flexDirection : 'row-reverse',
        alignItems : "left",
        paddingLeft : '-20px'
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderColor : 'black',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.90),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.80),
      },
      marginLeft: 0,
      height : 65,
      width: '140%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      color : 'white' ,
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'white',
      fontSize : 20,
      alignContent : 'center'
    },
    inputInput: {
      padding: theme.spacing(2.5, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    logo: {
        maxWidth: 200,
        maxHeight : 200,
        padding : 0 ,
        marginTop : -50,
        marginBottom  : -50 ,
    },
  }));
function Header({authenticated , image , name}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
console.log(image)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout= () => {

  }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="transperent" >
                <Toolbar>
                {/* <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton> */}
                {/* <Typography className={classes.title} variant="h6" noWrap>
                    Material-UI
                </Typography> */}
                <div className={classes.left}>
                <Link to="/" className={classes.link}>
                  <img src="Patronus.png" alt="logo" className={classes.logo} />
                </Link>
                <SelectCity/>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search for veterians"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                </div>
                {!authenticated ? (<Button
                    className = {classes.button}
                    color = "black"
                    href="http://localhost:5000/auth/google"
                    underline="none">
                      Login
                    </Button>) : (
                    // <Button
                    // className={classes.button}
                    // color = "black"
                    // href="http://localhost:5000/auth/logout"
                    // underline="none">
                    // Logout
                    // </Button>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                      Menu
                    </Button>
                    )}
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                    <Avatar className={classes.avatar} src={image}/>{name}</MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/myaccount" >
                        {'My Account'}
                      </Link>
                    </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <Link href="http://localhost:5000/auth/logout" >
                        {'Logout'}
                      </Link></MenuItem>
                    </Menu>
                <div className={classes.right}>
                <Link to="/donate" className={classes.link}>
                <Button
                classes={{
                    root: classes.button, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
                >
                    Donate 
                </Button>
                </Link>
                <Link to="/help" className={classes.link}>
                <Button
                classes={{
                    root: classes.button, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
                >
                    Contact Us
                </Button>
                </Link>
                <Link to="/adopt" className={classes.link}>
                <Button
                classes={{
                    root: classes.button, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
                >
                    Adoptions
                </Button>
                </Link>
                <Link to="/partners" className={classes.link}>
                <Button
                classes={{
                    root: classes.button, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
                >
                    Partnering NGOs 
                </Button>
                </Link>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
