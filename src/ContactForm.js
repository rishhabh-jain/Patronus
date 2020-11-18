import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DetailsForm from './DetailsForm';
import QueryForm from './QueryForm';
import Review from './Review';


function ContactForm() {
    const steps = ['Personal Details', 'Email ', 'Query'];
    function getStepContent(step) {
        switch (step) {
          case 0:
            return <DetailsForm />;
          case 1:
            return <QueryForm />;
          case 2:
            return <Review />;
          default:
            throw new Error('Unknown step');
        }
      }
        
        const [activeStep, setActiveStep] = React.useState(0);
        const handleNext = () => {
            setActiveStep(activeStep + 1);
        };

        const handleBack = () => {
            setActiveStep(activeStep - 1);
        };
        const useStyles = makeStyles((theme) => ({
            appBar: {
              position: 'relative',
            },
            layout: {
              width: 'auto',
              marginLeft: theme.spacing(2),
              marginRight: theme.spacing(2),
              [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            },
            paper: {
              marginTop: theme.spacing(3),
              marginBottom: theme.spacing(3),
              padding: theme.spacing(2),
              [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
              },
            },
            stepper: {
              padding: theme.spacing(3, 0, 5),
            },
            buttons: {
              display: 'flex',
              justifyContent: 'flex-end',
            },
            button: {
              marginTop: theme.spacing(3),
              marginLeft: theme.spacing(1),
            },
          }));
          const classes = useStyles();
    return (
        
        <div>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Contact Form 
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                        Thank you for contacting us 
                        </Typography>
                        <Typography variant="subtitle1">
                        We have got your query and we will contact you shortly.
                        </Typography>
                    </React.Fragment>
                    ) : (
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <div className={classes.buttons}>
                        {activeStep !== 0 && (
                            <Button onClick={handleBack} className={classes.button}>
                            Back
                            </Button>
                        )}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Send' : 'Next'}
                        </Button>
                        </div>
                    </React.Fragment>
                    )}
                </React.Fragment>
                </Paper>
                
            </main>
        </div>
    )
}

export default ContactForm
