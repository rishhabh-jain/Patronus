import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

function PList({items}) {
    const classes = useStyles()
    return (
        <div>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                <ListItemText
                primary={items.ngoname}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {items.location}
                    </Typography>
                    {items.number}
                    {items.pincode}
                    </React.Fragment>
                }
                />
            </ListItem>
            </List>
        </div>
    )
}

export default PList
