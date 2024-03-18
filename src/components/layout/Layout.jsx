import classes from './Layout.module.scss';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <div className={classes.wrapper}>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    );
}

export default Layout;
