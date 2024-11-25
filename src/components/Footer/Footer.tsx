import React from 'react';
import Logo from "../../assets/images/logo";
import NavBar from "../UI/NavBar/NavBar";
import './Footer.css'
import {routes} from "../../router";

const Footer = () => {
    return (
        <footer>
            <div className="f-top">
                <Logo />
                <NavBar Links={routes}/>
            </div>
            <p>
                © 2024 ООО “Интер”<br/>Оренбург, Советская ул., 40<br/>intoit@gmail.com<br/>+7 922 881 48-53
            </p>
        </footer>
    );
};

export default Footer;