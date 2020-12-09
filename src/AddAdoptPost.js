import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import {makeStyles } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import React, { useState , useEffect} from "react";
import { storage, db , auth } from "./firebase";
import { Input, Button } from "@material-ui/core"; 

const useStyles = makeStyles((theme)=> ({
    padding  : {
      align : 'center',
      margin : '20px',
      width : '80vw',
      textAlign: 'center'
    },
    root : {
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center'
    },
    imageupload__button : {
      backgroundColor : 'black', 
      color : 'white'
    }
}))

function AddPostjs() {
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    
  }, [])
  const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");
    const [title , setTitle ] = useState("");
    const [breed, setbreed] = useState("")
    const [location , setLocation ] = useState("");
    const [name , setName] = useState("");
    const [number , setNumber] = useState("");
    const classes = useStyles();

    const otpverify = () => {
      window.recaptchaVerifier = new auth.RecaptchaVerifier(
        "recaptcha",
        {
          size: "invisible",
          callback: function (response) {
            console.log("Captcha Resolved");
            this.onSignInSubmit();
          },
          defaultCountry: "IN",
        }
      );
      let number = '+919561079271';
      let appVerifier = window.recaptchaVerifier;
      auth.signInWithPhoneNumber(number , appVerifier).then(function(e){
        let code = prompt('enter the otp ' , '');
        if(code == null ) return ;
        e.confirm(code).then(function(result){
          console.log(result.user , 'user')
          console.log(result.user.phoneNumber)
        }).catch((error)=>{
          console.log(error)
        })
      })
    }

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        const uploadTask =storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            // Error function ...
            console.log(error);
          },
          () => {
            // complete function ...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setUrl(url);
                // post image on db
                const post =
                {   animalType : 'Dog' ,
                title: title,
                caption : caption ,
                breed  : breed ,
                location : location ,
                image : url,
                name : name , 
                number : number 
                };
                axios.post('https://patronusapi.herokuapp.com/adopt/createposts', post)
                .catch(error => {
                    console.error('There was an error!', error);
                })
                console.log(post)
                // db.collection("posts").add({
                //   imageUrl: url,
                //   caption: caption,
                  
                //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                // });
                setProgress(0);
                setCaption("");
                setImage(null);
                setName("");
                setNumber("");
                setTitle("");
                setLocation("");
                setOpen(true)
              });
          }
        );
        
    };
    
  return (
    <div className={classes.root}>
            <TextField required id="standard-required" value={title} onChange={(e) => setTitle(e.target.value)} className={classes.padding}fullWidth variant="outlined" label="Title"  />
            <TextField
                value={caption} 
                onChange={(e) => setCaption(e.target.value)}
                className={classes.padding}
                fullWidth
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
            />
            <TextField
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className={classes.padding}
                fullWidth
                id="standard-multiline-static"
                label="Location"
                multiline
                rows={4}
                variant="outlined"
            />
            <TextField required id="standard-required" value={breed} onChange={(e) => setbreed(e.target.value)}className={classes.padding}fullWidth variant="outlined" label="Breed"  />
            <TextField required id="standard-required" value={name} onChange={(e) => setName(e.target.value)}className={classes.padding}fullWidth variant="outlined" label="Name"  />
            <Select
                // onChange={(e) => setAnimalType(e.target.value)}
                className={classes.padding}
                label="Animal Type"
                defaultValue="Dog"
                >
                <MenuItem value={5}>Dog</MenuItem>
                <MenuItem value={6}>Cat</MenuItem>
            </Select>
            <Input className={classes.padding} type="file" onChange={handleChange} />
            <TextField required id="standard-required" className={classes.padding}fullWidth variant="outlined" value={number} onChange={(e) => setNumber(e.target.value)} label="Number" defaultValue="89867XXXXX" />
            {/* <Button onClick={otpverify}> Verify </Button> */}
            <div id="recaptcha"></div>
            <Button backgroundColor="red" onClick={handleUpload} className={classes.padding}>
                Upload
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Post Added !
              </Alert>
            </Snackbar>
            {/* <SelectCity className={classes.top}/> */}
        </div>
  )
}

export default AddPostjs


