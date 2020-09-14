import React, {useState} from 'react';
import myClasses from './Cart.module.scss'
import CartItem from "./CartStepper/CartItem/CartItem";

import CartButton from "../UI/CartButton/CartButton";
import {connect} from "react-redux";
import {clearCart} from "../../store/actions/cart";
import CartStepper from "./CartStepper/CartStepper";
import is from 'is_js'


const Cart = (props) => {
    const [isFormValid, setIsFormValid] = useState(false)
    const [form, setForm] = useState({
        tel: {
            value: '',
            label: 'Tel',
            type: 'tel',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 9
            }
        },
        email: {
            value: '',
            label: 'Email',
            type: 'email',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        name: {
            value: '',
            label: 'Name',
            type: 'name',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 1
            }
        },

        city: {
            value: '',
            label: 'City',
            type: 'city',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 1
            }
        },
        address: {
            value: '',
            label: 'Address',
            type: 'address',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 1
            }
        }
    })


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

    const cartItem = Object.keys(props.cartItems).map(key =>
        <CartItem
            key={key}
            pizzas={props.cartItems[key]}
            typePizza={key}
        />)

    return (
        <div className={myClasses.Cart}>
            <div className={myClasses.wrapper}>
                <div className={myClasses.title}>
                    <h1>Cart</h1>
                    <span
                        onClick={() => props.clearCart()}
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

                <div className={myClasses.total}>
                    <span>Total pizzas: <b>{props.count}</b></span>
                    <span>Order price: <b>${props.allPrice}</b></span>
                </div>
            </div>
            <div className={myClasses['pay-wrapper']}>
                <CartButton
                    type={'light'}>
                    Go back
                </CartButton>
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
