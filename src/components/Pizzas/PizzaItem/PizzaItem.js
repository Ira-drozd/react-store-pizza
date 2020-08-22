import React, {useState} from 'react';
import classes from './PizzaItem.module.scss'
import SelectPizza from "./SelectPizza/SelectPizza";
//import Context from "../../../context";

const PizzaItem = ({pizza}) => {
//const {}=useContext(Context)
    const [selectPizza, setSelectPizza] = useState(
        {
            id: pizza.id,
            imageURL: pizza.imageURL,
            name: pizza.name,
            type: pizza.type[0],
            size: pizza.size[0],//?
            dough:pizza.dough[0],
            price: 30
        }
    )

    console.log(selectPizza)

    const sizes = [
        {
            id: 1,
            size: 26
        },
        {
            id: 2,
            size: 30
        },
        {
            id: 3,
            size: 40
        }
    ]


    return (
        <div className={classes.PizzaItem}>
            <img src={pizza.imageURL} alt="pizza"/>
            <h3>{pizza.name}</h3>
            <SelectPizza
                sizes={sizes}
                size={pizza.size}
                prize={pizza.price}
                dough={pizza.dough}
                name={pizza.name}
                selectPizza={selectPizza}
                setSelectPizza={setSelectPizza}
            />
            <span>{pizza.price} $</span><button onClick={()=>
                console.log(pizza.name, selectPizza)
            }>Add</button>
        </div>

    )
};

export default PizzaItem;