import React from 'react'
import './NavigationItem.css'
import classNames from 'classnames'
import { type INavigationItem } from './types'

export const NavigationItem = ({ text, selected }: INavigationItem): JSX.Element => {
  return <div className={classNames(['nav-item', { selected }])}> { text } </div>
}
