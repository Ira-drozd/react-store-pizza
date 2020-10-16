import React, {useState} from 'react';
import classes from './Cart.module.scss'
import CartItem from "./CartStepper/CartItem/CartItem";
import CustomNavLink from "../UI/CustomNavLink/CustomNavLink";
import {connect} from "react-redux";
import {clearCart} from "../../store/actions/cart";
import CartStepper from "./CartStepper/CartStepper";
import {formConstants} from './constants'
import is from 'is_js'


const Cart = ({cartItems, count, allPrice, clearCart}) => {
    const [isFormValid, setIsFormValid] = useState(false)
    const [form, setForm] = useState(formConstants)

    const validateControl = (value, validation) => {
        if (!validation) {
            return true
        }
        let isValid = true
        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.trim().length >= validation.minLength && isValid
        }

        return isValid
    }

    const onChangeHandler = (event, controlName) => {
        const formControls = {...form}
        const control = {...formControls[controlName]}
        control.value = event.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)
        formControls[controlName] = control

        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        setForm(formControls)
        setIsFormValid(isFormValid)
    }

    const cartItem = Object.keys(cartItems).map(key =>
        <CartItem
            key={key}
            pizzas={cartItems[key]}
            typePizza={key}
        />)

    return (
        <div className={classes.Cart}>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <h1>Cart</h1>
                    <span
                        onClick={() => clearCart()}
                    >
                        Clear
                    </span>
                </div>

                <CartStepper
                    cartItem={cartItem}
                    form={form}
                    onChangeHandler={onChangeHandler}
                    isFormValid={isFormValid}
                />

                <div className={classes.total}>
                    <span>Total pizzas: <b>{count}</b></span>
                    <span>Order price: <b>${allPrice}</b></span>
                </div>
            </div>
            <div className={classes['pay-wrapper']}>
                <CustomNavLink
                    type={'light'}>
                    Go back
                </CustomNavLink>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        count: state.cart.count,
        allPrice: state.cart.allPrice

    }
}


const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
