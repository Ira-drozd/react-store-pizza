import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import CartPage from "./components/containers/CartPage/CartPage";
import PizzaPage from "./components/containers/PizzaPage/PizzaPage";
import {BrowserRouter} from "react-router-dom";
import Context from "./context";


function App() {

    const [cartItems, setCartItems] = useState({})
    const [allPrice, setAllPrice] = useState(0)
    const [count, setCount] = useState(0)

    const getCartItem = (selectPizza) => {

        const item = {
            [selectPizza.id]: [
                {
                    id: Date.now(),
                    name: selectPizza.name,
                    price: selectPizza.price,
                    imageURL: selectPizza.imageURL,
                    size: selectPizza['size'].size,
                    dough: selectPizza['dough'].dough,
                    count: 1,
                    allPrice: selectPizza.price,
                    setPrice(){
                        return this.count*this.price
                    }
                }
            ]
        }

        const keys = Object.keys(cartItems)
        const keyItem = Object.keys(item)[0]

        const subItem = item[keyItem][0]

        // console.log('subItem', subItem)

        const allPizzas = cartItems[keyItem]
        console.log(allPizzas)

        if (keys.includes(keyItem)) {

            if (!cartItems[keyItem].some(pizzaItem =>
                pizzaItem.size === subItem.size && pizzaItem.dough === subItem.dough)) {
                setCartItems(prevState => Object.assign(prevState, prevState[keyItem].push(subItem)))
            }

        } else {
            setCartItems(prevState => Object.assign(prevState, item))
        }

        setCount(getCount(cartItems))
        setAllPrice(getAllPrice(cartItems))

    }

    const getCount = (cartItems) => {
        let count = 0
        for (let key in cartItems) {
            cartItems[key].forEach(() =>
                count += 1
            )
        }

        return count
    }

    const getAllPrice = (cartItems) => {
        let sum = 0
        for (let key in cartItems) {
            sum += cartItems[key].reduce((acc, item) => {
                return acc + item.allPrice
                //return acc + item.price
            }, 0)
        }
        return sum
    }

    const clearCart = () => {
        setCartItems({})
        setAllPrice(0)
        setCount(0)
    }


    const deletePizza = (selectPizza) => {

        const newCartItems = {...cartItems}

        const allPizzas = newCartItems[selectPizza.typePizza]
        const deletePizza = allPizzas.filter(pizza =>
            pizza.id !== selectPizza.pizzaId
        )


        if(deletePizza.length){
            const newItem = {[selectPizza.typePizza]: deletePizza}
            Object.assign(newCartItems, newItem)
        }
        else {
            delete newCartItems[selectPizza.typePizza]
        }

        setCartItems(newCartItems)

        setCount(getCount(newCartItems))
        setAllPrice(getAllPrice(newCartItems))

    }

    const addPizza=(selectPizza)=>{


         const newCartItems = {...cartItems}
         const allPizzas = newCartItems[selectPizza.typePizza]

        const addPizza = allPizzas.map(pizza=> {
            if(pizza.id===selectPizza.pizzaId){
                pizza.count = pizza.count+1
                pizza.allPrice=pizza.setPrice()

            }
            return pizza
            }
        )

         const newItem = {[selectPizza.typePizza]: addPizza}
         Object.assign(newCartItems, newItem)

        setCartItems(newCartItems)
        setAllPrice(getAllPrice(newCartItems))
    }

    const subPizza=(selectPizza)=>{

        console.log('addPizza', selectPizza)

         const newCartItems = {...cartItems}
         const allPizzas = newCartItems[selectPizza.typePizza]

        const subPizza = allPizzas.map(pizza=> {
            if(pizza.id===selectPizza.pizzaId){
                if (pizza.count>1){
                    pizza.count = pizza.count-1
                    pizza.allPrice=pizza.setPrice()
                }
            }
            return pizza
            }
        )

         const newItem = {[selectPizza.typePizza]: subPizza}
         Object.assign(newCartItems, newItem)

        setCartItems(newCartItems)
        setAllPrice(getAllPrice(newCartItems))
    }

    return (
        <BrowserRouter>
            <Context.Provider value={{
                getCartItem,
                cartItems,
                count,
                allPrice,
                setCartItems,
                clearCart,
                deletePizza,
                addPizza,
                subPizza
            }}>
                <Layout>
                    <Switch>
                        <Route path='/' component={PizzaPage} exact/>
                        <Route path='/cart' component={CartPage} exact/>
                    </Switch>
                </Layout>
            </Context.Provider>
        </BrowserRouter>
    );
}

export default App;
