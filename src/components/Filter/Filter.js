import React from 'react';
import {connect} from "react-redux";
import Button from '../UI/Button/Button'
import {setActiveType} from "../../store/actions/pizzas";
import classes from './Filter.module.scss'

const Filter = ({selectedType, types, setActiveType}) => {

    return (
        <div className={classes.Filter}>
            {
                types.map(type =>
                        <Button
                            key={type.id}
                            type='TypeButton'
                            active={selectedType.id === type.id}
                            onClick={() => setActiveType({
                                id: type.id,
                                title: type.title
                            })}
                        >
                            {type.title}
                        </Button>
                    )
            }

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        types: state.pizzas.types,
        selectedType: state.pizzas.type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveType: (selectType) => dispatch(setActiveType(selectType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);