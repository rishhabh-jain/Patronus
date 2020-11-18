import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    number : {
      maxWidth : 10,
      alignItems : 'flex-end'
    },
    location  : {
      minWidth : 250
    },
    media: {
      marginTop:'30',
      height: 270,
      width : 400
    },
    content : {
      height : 90
    },
    actions : {
      height : 50
    },
    breed : {
        paddingTop : '15px',
        color : '#3333ff'
    }
  });

function AdoptCard({item , isLoading}){
    const breed =  item.breed
    const classes = useStyles();
    const caption = item.caption
    function capital(title) { return title.charAt(0).toUpperCase() + title.slice(1)}
    const title = item.title
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = item.createdAt.substring(5, 7);
    const day = item.createdAt.substring(8,10);
    const year = item.createdAt.substring(0,4)
    const name = item.name ;
    const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    return isLoading ? (<h1> is loadingnm,fdn,gm </h1>) : 
   (  
      <div>
         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">User Number</DialogTitle>
          <DialogContent>
              {item.number}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} alignItems="left" color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>
        <Card className={classes.root}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                { name.charAt(0).toUpperCase()}
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title= { name.toUpperCase()}
            subheader = {(day) + (" ") + (monthNames[month -1 ])  + (" ")+ (year)}
          />
          <CardMedia
            className={classes.media}
            image = {item.image}
            title={item.title}
          />
          <CardContent
            className = {classes.content}
            >
            <Typography gutterBottom variant="h5" component="h2">
              {
              capital(title) 
              }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {capital(caption)}
            </Typography>
            <Typography variant="h6" align="right" className={classes.breed}>
              {capital(breed)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          className = {classes.actions}
          >
          <Typography className={classes.location} fontSize={2} fontWeight = "400">
            {item.location}
          </Typography>
          <Button size="small" color="primary" className={classes.number} onClick={handleClickOpen}>
            Show Number
          </Button>
        </CardActions>
      </Card>
      </div>
    )
}

export default AdoptCard
