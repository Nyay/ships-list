import React from 'react';
import './Menu.css';
import { Navigation } from '../Navigation/Navigation';
import {MenuButton} from "./components/MenuButton/MenuButton";

export const Menu = () => {
    return (
        <div className='top-menu'>
            <Navigation />
            <MenuButton />
        </div>
    )
}