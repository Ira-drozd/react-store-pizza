import React, {useState} from 'react';
import classes from './SelectPizza.module.scss'
import SelectSize from "./SelectSize/SelectSize";

const SelectPizza = ({
                         sizes, name,
                         size, price, dough,
                         selectPizza, setSelectPizza
                     }) => {

     const [activeSize, setActiveSize] = useState(sizes[size[0]-1])

    setSelectPizza(
             prevState=>Object.assign(prevState,activeSize)
         )


    return (
        <div className={classes.SelectPizza}>
            <div className={classes.row}>

                <button
                    disabled={!dough.includes(1)}
                >testo
                </button>

                <button disabled={!dough.includes(2)}
                        className={classes.active}>testo
                </button>

            </div>
            <div className={classes.row}>
                {
                    sizes.map((sizeItem, index) =>
                        <SelectSize
                            key={index}
                            sizeItem={sizeItem}
                            size={size}
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