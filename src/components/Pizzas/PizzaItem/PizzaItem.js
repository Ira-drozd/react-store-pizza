import React, {useState, useEffect, useCallback} from 'react';
import classes from './PizzaItem.module.scss'
import SelectPizza from "./SelectPizza/SelectPizza";
import Context from "../../../context";
import {connect} from "react-redux";
import {getCartItem, setMessage} from "../../../store/actions/cart";
import {motion} from "framer-motion";
import Message from "../../UI/Message/Message";
import {sizes, doughs} from './constants'
import Button from "../../UI/Button/Button";

const PizzaItem = ({pizza, setSelectDescription,getCartItem, message, setMessage}) => {
    const [cost, setCost] = useState(pizza.price)

    const calcCost = useCallback((selectSize) => {
        if (selectSize === 1) {
            setCost(pizza.price)
        }
        if (selectSize === 2) {
            setCost(pizza.price + 100)
        }
        if (selectSize === 3) {
            setCost(pizza.price + 200)
        }
    }, [pizza.price])


    const [selectPizza, setSelectPizza] = useState(
        {
            id: pizza.id,
            imageURL: pizza.imageURL,
            name: pizza.name,
            size: sizes[pizza.size[0] - 1],
            dough: doughs[pizza.dough[0] - 1],
            price: cost
        }
    )

    useEffect(() => {
        calcCost(selectPizza.size.idS)
        setSelectPizza(prevState => Object.assign(prevState, {price: cost}))
    }, [calcCost, selectPizza.size.idS, cost])

    const [open, setOpen] = useState(false);

    const addClickHandler = () => {
        getCartItem(selectPizza)
        setOpen(true)
    }


    return (
        <Context.Provider value={{
            selectPizza, setSelectPizza,
            sizes,
            doughs,
            pizza,
            calcCost
        }}>
            <div className={classes.PizzaItem}>
                <div className={classes["img-container"]}>
                    <motion.img
                        layout
                        whileHover={{scale: 1.1}}
                        src={pizza.imageURL}
                        alt="pizza"
                        onClick={() => setSelectDescription(
                            {
                                img: pizza.imageURL,
                                name: pizza.name,
                                description: pizza.description
                            }
                        )}
                    />
                </div>
                <h3>{pizza.name}</h3>

                <SelectPizza/>

                <div className={classes['add-container']}>
                    <span>${cost}</span>
                    <Button
                        onClick={addClickHandler}
                        type='AddButton'
                    >
                        <span>+</span> Add
                    </Button>
                </div>
                {
                    message && <Message open={open} setOpen={setOpen}/>
                }

            </div>
        </Context.Provider>
    )
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        message: state.cart.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartItem: selectPizza => dispatch(getCartItem(selectPizza)),
        setMessage: err => dispatch(setMessage(err))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PizzaItem);