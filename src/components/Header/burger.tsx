import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

type MenuItem = {
    label: string;
    link: string;
};

const menuItems: MenuItem[] = [
    { label: 'Главная', link: '/' },
    { label: 'Курсы', link: '/curses' },
    { label: 'Контакты', link: '/contact' },
    { label: 'Форум', link: '/forum' },
];

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <button className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.link}>
                            <Link to={item.link}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;