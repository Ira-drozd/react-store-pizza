import React, {useContext} from 'react';
import classes from './SelectSize.module.scss'
import Context from "../../../../../context";

const SelectSize = ({sizeItem, activeSize, setActiveSize}) => {
    const {pizza, calcCost} = useContext(Context)
    const cls = [classes.SelectSize]
    const disabled = !pizza.size.includes(sizeItem.idS)////pizza.size

    if (activeSize.size.idS === sizeItem.idS) {
        cls.push(classes.active)
    }

    const onClickHandler = (sizeItem) => {
        setActiveSize(
            {
                size: {
                    idS: sizeItem.idS,
                    size: sizeItem.size
                }
            }
        )
        calcCost.bind(null, sizeItem.idS)()
    }

    return (
        <button
            disabled={disabled}
            className={cls.join(' ')}
            onClick={() => onClickHandler(sizeItem)}
        >
            {sizeItem.size}
        </button>
    )
};

export default SelectSize;