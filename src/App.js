import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import CartPage from "./components/containers/CartPage/CartPage";
import PizzaPage from "./components/containers/PizzaPage/PizzaPage";
import {BrowserRouter} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path='/' component={PizzaPage} exact/>
                        <Route path='/cart' component={CartPage} exact/>
                    </Switch>
                </Layout>
        </BrowserRouter>
    );
}

export default App;
