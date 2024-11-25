import React, {FC} from 'react';
import NavBar from "../UI/NavBar/NavBar";
import './Header.css'
import {routes} from "../../router";
import Button from "../UI/Button/Button";
import Logo from "../../assets/images/logo";

const Header: FC = () => {
    return (
        <header>
            <Logo />
            <NavBar Links={routes}/>
            <Button defaultValue='Войти'/>
        </header>
    );
};

export default Header;