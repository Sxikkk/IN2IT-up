import React, {FC} from 'react';
import NavBar from "../UI/NavBar/NavBar";
import './Header.css'
import {routes} from "../../router";
import Button from "../UI/Button/Button";
import Logo from "../../assets/images/logo";
import BurgerMenu from "./burger";
import {useNavigate} from "react-router";
import {replace} from "react-router-dom";

const Header: FC = () => {

    const navigate = useNavigate();

    return (
        <header>
            <Logo />
            <BurgerMenu/>
            <NavBar Links={routes}/>
            <Button defaultValue='Войти' onClick={() => {navigate('/Login')}}/>
        </header>
    );
};

export default Header;