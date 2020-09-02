import React from 'react';
import classes from './Filter.module.scss'
import TypeButton from "./TypeButton/TypeButton";
import {connect} from "react-redux";

const Filter = (props) => {

    return (
        <div className={classes.Filter}>
            {
                props.types.map(type =>
                    <TypeButton
                        key={type.id}
                         title={type.title}
                         id={type.id}
                    />)
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        types: state.pizzas.types,
        type: state.pizzas.type
    }
}

export default connect(mapStateToProps)(Filter);