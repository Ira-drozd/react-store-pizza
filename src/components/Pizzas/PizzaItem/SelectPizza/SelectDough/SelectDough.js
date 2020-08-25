import React, {useContext} from 'react';
import classes from './SelectDough.module.scss'
import Context from "../../../../../context";

const SelectDough = ({doughsItem, activeDough, setActiveDough}) => {

    const {pizza} = useContext(Context)
    const cls = [classes.SelectDough]
    const disabled = !pizza.dough.includes(doughsItem.idD)////pizza.size

    if (activeDough.dough.idD === doughsItem.idD) {
        cls.push(classes.active)
    }

    return (
        <button
            disabled={disabled}
            className={cls.join(' ')}
            onClick={() => setActiveDough(
                {dough:{
                        idD: doughsItem.idD,
                        dough: doughsItem.dough
                    }
                }
            )}
        >
            {doughsItem.dough}
        </button>
    )
};

export default SelectDough;