import React from 'react';
import classes from './Sort.module.scss'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const CustomInput = withStyles((theme) => ({
    input: {
        width:130,
        borderRadius: 4,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #e8ddcf',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        '&:focus': {
            borderRadius: 4,
            borderColor: '#FE5F1E',
            boxShadow: '0 0 0 0.2rem #FE5F1E',
        }
    },
}))(InputBase);


const Sort = ({category, setCategory}) => {
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className={classes.Sort}>
            <span>Sort&nbsp;by:</span>
            <FormControl>
                <Select
                    value={category}
                    onChange={handleChange}
                    input={<CustomInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Popularity</MenuItem>
                    <MenuItem value={2}>Prize</MenuItem>
                    <MenuItem value={3}>A-z</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
};

export default Sort;
