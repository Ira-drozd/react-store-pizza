import React, {useState, useEffect, useCallback} from 'react';
import classes from './PizzaItem.module.scss'
import SelectPizza from "./SelectPizza/SelectPizza";
import Context from "../../../context";
import {connect} from "react-redux";
import {getCartItem, setMessage} from "../../../store/actions/cart";
import AddButton from "../../UI/AddButton/AddButton";
import {motion} from "framer-motion";
import Message from "../../UI/Message/Message";

const PizzaItem = (props) => {

    const {pizza} = props

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
        props.getCartItem(selectPizza)
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
                <motion.img
                    layout
                    whileHover={{scale: 1.1}}
                    src={pizza.imageURL}
                    alt="pizza"
                    onClick={() => props.setSelectDescription(
                        {
                            img: pizza.imageURL,
                            name: pizza.name,
                            description: pizza.description
                        }
                    )}
                />
                <h3>{pizza.name}</h3>

                <SelectPizza/>
                <div className={classes['add-container']}>
                    <span>${cost}</span>

                    <AddButton
                        getCartItem={
                            addClickHandler
                        }
                    ><span>+</span> Add
                    </AddButton>
                </div>
                {
                    props.message && <Message open={open} setOpen={setOpen}/>
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