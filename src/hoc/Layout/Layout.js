import React from 'react';
import classes from './Layout.module.scss'
import Header from "../../components/Header/Header";

const Layout = (props) => (
    <div className={classes.Layout}>
        <Header/>
        <main>
            {props.children}
        </main>
    </div>
);

export default Layout;