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
                    count:1
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
                pizzaItem.size === subItem.size && pizzaItem.dough === subItem.dough)){
               setCartItems(prevState => Object.assign(prevState, prevState[keyItem].push(subItem)))
           }

        } else {
            setCartItems(prevState => Object.assign(prevState, item))
        }

        setCount(getCount())
        setAllPrice(getAllPrice())

    }

    const getCount = () => {
        let count = 0
        for (let key in cartItems) {
            cartItems[key].forEach(() =>
                count += 1
            )
        }
        return count
    }

    const getAllPrice = () => {
        let sum = 0
        for (let key in cartItems) {
            sum += cartItems[key].reduce((acc, item) => {
                return acc + item.price
            }, 0)
        }
        return sum
    }

    return (
        <BrowserRouter>
            <Context.Provider value={{
                getCartItem,
                cartItems,
                count,
                allPrice,
                setCartItems
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
