import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContactForm from './ContactForm'
import Button from '@material-ui/core/Button'
import classes from './BackgroundVideo.module.css';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      marginTop : '120px'
    },
    buttonRoot : {
        borderRadius: 0,
            fontWeight: theme.typography.fontWeightMedium,
            fontFamily: theme.typography.fontFamilySecondary,
            padding: theme.spacing(2, 4),
            fontSize: theme.typography.pxToRem(14),
            boxShadow: 'none',
            '&:active, &:focus': {
              boxShadow: 'none',
            },
    },
    sizeLarge: {
        padding: theme.spacing(2, 5),
        fontSize: theme.typography.pxToRem(16),
        borderRadius: 0,
            fontWeight: theme.typography.fontWeightMedium,
            fontFamily: theme.typography.fontFamilySecondary,
            padding: theme.spacing(2, 4),
            fontSize: theme.typography.pxToRem(14),
            boxShadow: 'none',
            '&:active, &:focus': {
              boxShadow: 'none',
            },
      },
      button: {
        backgroundColor :'#ADD8E6' ,
        borderRadius: 3,
        border: 0,
        '&:hover': {
           backgroundColor: '#00BFFF',
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
      accordion : {
          margin  : '20px'
      },
      faqs : {
        paddingTop : '50px '
      }, 
      accord : {
        display : 'flex',
        flexDirection : 'column ',
        alignItems : 'center' , 
        justifyItems : 'space-between ' , 
        height: 600,
        backgroundColor : '#fff5f8' , 
        backgroundImage: `url(${'https://material-ui.com/static/themes/onepirate/productCurvyLines.png'})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      },
  }));
function Help() {
    const styles = useStyles()
    const video = 'https://rishhabh-bucket.s3.ap-south-1.amazonaws.com/Untitled+design+(1).mp4'
    const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    return (
        <div className={styles.root}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
                Patronus
            </Link>
            <Typography color="textPrimary">Contact Us </Typography>
            </Breadcrumbs>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className={classes.Content}>
                <div className={classes.SubContent} >
                
                </div>
                <Button  
                classes={{
                    root: styles.button, // class name, e.g. `classes-nesting-root-x`
                    label: styles.label, // class name, e.g. `classes-nesting-label-x`
                }}
                size="large"  variant="contained">
                    Contact Us 
                </Button>
            </div>
                {/* <Divider variant="middle" />
                <Typography variant="h2" align="center" color="black">
                    Contact Us                
                </Typography> */}
                {/* <Divider variant="middle" /> */}
                <div className = {styles.accord}>
                <Typography variant="h4" align="center" color="black" className={styles.faqs}>
                    Some Frequently asked questions                 
                </Typography>
                <Accordion className={styles.accordion }>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}> FAQ 1 </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordion }>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>FAQ 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordion }>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}> FAQ 4 </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordion }>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>FAQ 5 </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled className={styles.accordion } >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>FAQ 3 (only if you have donated some amount )</Typography>
                  </AccordionSummary>
                </Accordion>
                </div>
                <ContactForm/>
        </div>
    )
}

export default Help
