import React from 'react';
import classes from './Filter.module.scss'
import TypeButton from "./TypeButton/TypeButton";

const Filter = ({selectType, setSelectType, types}) => {

    return (
        <div className={classes.Filter}>
            {
                types.map(type =>
                    <TypeButton
                        key={type.id}
                        title={type.title}
                        id={type.id}
                        selectType={selectType}
                        setSelectType={setSelectType}
                    />)
            }
        </div>
    )
};

export default Filter;