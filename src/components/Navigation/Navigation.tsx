import React from 'react';
import { NavigationItem } from './components/NavigationItem/NavigationItem';
import './Navigation.css';
import uniqid from 'uniqid';
import { imgLink, navLabels } from './constants';

export const Navigation = () => <div className='nav'>
    <img
        className='menu-logo'
        src={ imgLink }
        alt='Logo'
    />
    { navLabels.map(( label ) => <NavigationItem
            text={label}
            key={uniqid()}
            selected={label == 'Флотилия'}
        />)
    }
</div>