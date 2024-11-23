import React, {FC} from 'react';
import NavBar from "../UI/NavBar/NavBar";
import './Header.css'
import {routes} from "../../router";
import Button from "../UI/Button/Button";

const Header: FC = () => {
    return (
        <header>
            <img src="../../assets/images/LOGO.svg" alt="logo"/>
                <NavBar Links={routes}/>
            <Button defaultValue='Войти'/>
        </header>
    );
};

export default Header;