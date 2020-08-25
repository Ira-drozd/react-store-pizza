import React, {useState, useContext, useEffect} from 'react';
import classes from './PizzaItem.module.scss'
import SelectPizza from "./SelectPizza/SelectPizza";
import Context from "../../../context";

const PizzaItem = ({pizza}) => {

    const {getCartItem} = useContext(Context)

    const sizes = [
        {
            idS: 1,
            size: 26
        },
        {
            idS: 2,
            size: 30
        },
        {
            idS: 3,
            size: 40
        }
    ]

    const doughs = [
        {
            idD: 1,
            dough: 'Thin crust'
        },
        {
            idD: 2,
            dough: 'Thick dough'
        }
    ]

    const [cost, setCost] = useState(pizza.price)


    const calcCost = (selectSize) => {
        if (selectSize === 1) {
            setCost(pizza.price)
        }
        if (selectSize === 2) {
            setCost(pizza.price + 100)
        }
        if (selectSize === 3) {
            setCost(pizza.price + 200)
        }
    }

    const [selectPizza, setSelectPizza] = useState(
        {
            id: pizza.id,
            imageURL: pizza.imageURL,
            name: pizza.name,
            size: sizes[pizza.size[0] - 1],//?{id, size} {idS: 2, size: 30}
            dough: doughs[pizza.dough[0] - 1],//{idD: 2, dough: "Thick dough"}
            price: cost
        }
    )

    useEffect(() => {
        calcCost(selectPizza.size.idS)
        setSelectPizza(prevState => Object.assign(prevState, {price: cost}))
    })

    //console.log(selectPizza)

    return (
        <Context.Provider value={{
            selectPizza, setSelectPizza,
            sizes,
            doughs,
            pizza,
            calcCost
            // ,            setCost
        }}>
            <div className={classes.PizzaItem}>
                <img src={pizza.imageURL} alt="pizza"/>
                <h3>{pizza.name}</h3>

                <SelectPizza/>
                <span>{cost} $</span>
                <button onClick={() => {
                    // console.log(pizza.name, selectPizza)
                    getCartItem.bind(null, selectPizza)()
                }
                }>Add
                </button>
            </div>
        </Context.Provider>
    )
};

export default PizzaItem;