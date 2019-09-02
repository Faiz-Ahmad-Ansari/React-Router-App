import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = ()=> {
    return(
        <div className="myNav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="About">About</Link></li>
                <li><Link to="Contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export  default Menu;