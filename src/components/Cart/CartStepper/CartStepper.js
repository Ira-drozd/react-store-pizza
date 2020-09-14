import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormContacts from "./FormContacts/FormContacts";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => (
    {
        root: {
            width: '100%',
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },

        icon: {
            color: "#FE5F1E !important"
        },


    }

));

function getSteps() {
    return ['Selected pizzas', 'Your contacts'];
}

const CartStepper = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function getStepContent(step) {
        switch (step) {
            case 0:
                return props.cartItem
            case 1:
                return <FormContacts
                    form={props.form}
                    onChangeHandler={props.onChangeHandler}
                />;
            default:
                return 'Unknown step';
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper
                style={
                    {padding: 0}
                }
                activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel
                            StepIconProps={{
                                classes: {
                                    active: classes.icon,
                                    completed: classes.icon
                                }
                            }}
                        >
                            {label}
                        </StepLabel>
                        <StepContent>
                            {getStepContent(index)}
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                        style={
                                            {
                                                borderRadius: '30px',
                                                padding: '5px 30px',
                                                textTransform: 'capitalize',
                                                fontWeight: 'bold',
                                                fontSize: '16px',
                                                backgroundColor: '#FFFFFF',
                                                color: '#CACACA',
                                                border: '1px solid #CACACA',
                                                margin: '0.5rem'
                                            }
                                        }
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                        style={
                                            {
                                                borderRadius: '30px',
                                                padding: '5px 30px',
                                                textTransform: 'capitalize',
                                                fontWeight: 'bold',
                                                fontSize: '16px',
                                                backgroundColor: '#FE5F1E',
                                                margin: '0.5rem'
                                            }
                                        }
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    {
                        props.isFormValid
                            ? <div>
                                <Typography>You can pay!</Typography>
                                <Button
                                    onClick={() => {
                                        console.log('Pizzas', props.cartItems)
                                        console.log('Count', props.count)
                                        console.log('All price', props.allPrice)
                                        console.log('Form', props.form)
                                    }
                                    }
                                >
                                    Show in console
                                </Button>
                            </div>
                            : <Typography>Not all steps completed. Check that all fields have been filled in correctly.
                            </Typography>
                    }
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        count: state.cart.count,
        allPrice: state.cart.allPrice

    }
}

export default connect(mapStateToProps)(CartStepper);
