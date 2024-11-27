import React, {FC} from 'react';
import './NavBar.css'
import {RProps} from "../../../router";
import {Link} from "react-router-dom";

interface Props {
    Links: RProps[]
}

const NavBar: FC<Props> = ({Links}) => {
    return (
        <nav className='navbar'>
            {Links.map(link => (
                <Link className='link' to={link.path}>{link.name}</Link>
                ))
            }
        </nav>
    );
};

export default NavBar;