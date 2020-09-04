import React, {useContext, useEffect, useState} from 'react';
import classes from './SelectPizza.module.scss'
import SelectSize from "./SelectSize/SelectSize";
import Context from "../../../../context";
import SelectDough from "./SelectDough/SelectDough";

const SelectPizza = (props) => {

    const {pizza, setSelectPizza, sizes, doughs} = useContext(Context)
    //pizza.dough

    const [activeSize, setActiveSize] = useState({size: sizes[pizza.size[0] - 1]})//pizza.size {}
    const [activeDough, setActiveDough] = useState({dough: doughs[pizza.dough[0] - 1]})//pizza.size

    //console.log('activeSize',activeSize)

    useEffect(()=>{
        setSelectPizza(prevState => Object.assign(prevState, activeSize, activeDough))
    },[activeSize, activeDough, setSelectPizza])
    // setSelectPizza(prevState => Object.assign(prevState, activeSize, activeDough))


    return (
        <div className={classes.SelectPizza}>
            <div className={classes.row}>
                {
                    doughs.map((doughsItem, index)=>
                    <SelectDough
                    key={index}
                    doughsItem={doughsItem}
                    activeDough={activeDough}
                    setActiveDough={setActiveDough}
                    />
                    )
                }

            </div>
            <div className={classes.row}>
                {
                    sizes.map((sizeItem, index) =>
                        <SelectSize
                            key={index}
                            sizeItem={sizeItem}
                            // size={pizza.size}//pizza.size
                            activeSize={activeSize}
                            setActiveSize={setActiveSize}
                        />
                    )
                }
            </div>
        </div>
    )
};

export default SelectPizza;