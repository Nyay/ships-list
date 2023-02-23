import React from 'react';
import './NavigationItem.css'
import classNames from 'classnames';
import { INavigationItem } from './types';

export const NavigationItem = ({ text, selected }: INavigationItem) => {
    console.log(selected);
    return <div className={classNames(['nav-item', {selected: selected}])}> { text } </div>
}
