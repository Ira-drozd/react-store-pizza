import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& label.Mui-focused': {
            color: '#FE5F1E',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FE5F1E',
        },
    },
}));

const FormContacts = (props) => {

    const {form, onChangeHandler} = props

    const classes = useStyles();


    return (
        <form className={classes.root} noValidate autoComplete="off">
            {
                Object.keys(form).map((controlName, index) => {
                        const control = form[controlName]
                        return <div key={index}>
                            <TextField
                                value={control.value}
                                id={control.type}
                                label={control.label}
                                onChange={e => onChangeHandler(e, control.type)}
                            />
                            {
                                control.valid
                                    ? <CheckIcon style={{color: 'green'}}/>
                                    : <CloseIcon style={{color: 'red'}}/>
                            }
                        </div>
                    }
                )
            }
        </form>
    );
};

export default FormContacts;