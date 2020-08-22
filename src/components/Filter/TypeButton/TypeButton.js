import React from 'react';
import classes from './TypeButton.module.scss'

const TypeButton = ({title, id, selectType, setSelectType}) => {
    const cls = [classes.TypeButton]

    if (selectType.id === id) {
        cls.push(classes.active)
    }

    return (
        <button
            className={cls.join(' ')}
            onClick={() => setSelectType({
                id: id,
                title: title
            })}
        >
            {title}
        </button>
    )
};

export default TypeButton;