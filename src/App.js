import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Cart from "./components/containers/Cart/Cart";
import Pizza from "./components/containers/Pizza/Pizza";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/' component={Pizza} exact/>
                    <Route path='/cart' component={Cart} exact/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
