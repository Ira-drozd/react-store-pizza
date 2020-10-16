import React, {useContext, useEffect, useState} from 'react';
import classes from './SelectPizza.module.scss'
import Context from "../../../../context";
import Button from "../../../UI/Button/Button";

const SelectPizza = (props) => {
    const {pizza, setSelectPizza, sizes, doughs, calcCost} = useContext(Context)
    const [activeSize, setActiveSize] = useState({size: sizes[pizza.size[0] - 1]})//pizza.size {}
    const [activeDough, setActiveDough] = useState({dough: doughs[pizza.dough[0] - 1]})//pizza.size

    useEffect(() => {
        setSelectPizza(prevState => Object.assign(prevState, activeSize, activeDough))
    }, [activeSize, activeDough, setSelectPizza])

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
        <div className={classes.SelectPizza}>
            <div className={classes.row}>
                {
                    doughs.map((doughsItem, index) =>
                        <Button
                            key={index}
                            type='Select'
                            active={activeDough.dough.idD === doughsItem.idD}
                            disabled={!pizza.dough.includes(doughsItem.idD)}
                            onClick={() => setActiveDough(
                                {
                                    dough: {
                                        idD: doughsItem.idD,
                                        dough: doughsItem.dough
                                    }
                                }
                            )}
                        >
                            {doughsItem.dough}
                        </Button>
                    )
                }
            </div>
            <div className={classes.row}>
                {
                    sizes.map((sizeItem, index) =>
                        <Button
                            key={index}
                            type='Select'
                            active={activeSize.size.idS === sizeItem.idS}
                            disabled={!pizza.size.includes(sizeItem.idS)}
                            onClick={() => onClickHandler(sizeItem)}
                        >
                            {sizeItem.size}
                        </Button>
                    )
                }
            </div>
        </div>
    )
};

export default SelectPizza;