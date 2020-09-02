import React from 'react';
import classes from './Sort.module.scss'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import {setActiveCategory} from "../../store/actions/pizzas";
import {connect} from "react-redux";



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
            borderColor: '#fe5f1e',
            boxShadow: '0 0 0 0.2rem #FE5F1E',
        }
    },
}))(InputBase);


const Sort = (props) => {



    const {setActiveCategory} = props

    const handleChange = (event) => {
        setActiveCategory(event.target.value)
    };

    return (
        <div className={classes.Sort}>
            <span>Sort&nbsp;by:</span>
            <FormControl>
                <Select
                    value={props.category}
                    onChange={handleChange}
                    input={<CustomInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'rating'}>Popularity</MenuItem>
                    <MenuItem value={'price'}>Prize</MenuItem>
                    <MenuItem value={'name'}>A-z</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        category: state.pizzas.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveCategory: (selectCategory)=>dispatch(setActiveCategory(selectCategory))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sort);

