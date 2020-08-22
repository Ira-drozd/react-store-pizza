import React from 'react';
import classes from './SelectSize.module.scss'

const SelectSize = ({sizeItem, size, activeSize, setActiveSize}) => {
    const cls = [classes.SelectSize]

    if (activeSize.id === sizeItem.id) {
        cls.push(classes.active)
    }


    const disabled = !size.includes(sizeItem.id)

    return (
        <button
            disabled={disabled}
            className={cls.join(' ')}
            onClick={() => setActiveSize(
                {
                    id: sizeItem.id,
                    size: sizeItem.size
                }
            )}
        >

            {sizeItem.size}
        </button>
    )
};

export default SelectSize;