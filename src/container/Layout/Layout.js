import React from 'react';
import classes from './Layout.module.scss'
import Header from "../../components/Header/Header";

const Layout = ({children}) => (
    <div className={classes.Layout}>
        <Header/>
        <main>
            {children}
        </main>
    </div>
);

export default Layout;