import React from 'react';
import classes from './TypeButton.module.scss'
import {connect} from "react-redux";
import {setActiveType} from "../../../store/actions/pizzas";

const TypeButton = (props) => {
    const cls = [classes.TypeButton]

    if (props.type.id === props.id) {
        cls.push(classes.active)
    }

    const {setActiveType} = props

    return (
        <button
            className={cls.join(' ')}
            onClick={() => setActiveType({
                id: props.id,
                title: props.title
            })}
        >
            {props.title}
        </button>
    )
};

const mapStateToProps = (state) => {
    return {
        type: state.pizzas.type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveType: (selectType) => dispatch(setActiveType(selectType))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TypeButton);
