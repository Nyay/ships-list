import React from 'react'
import './ClassFilter.css'
import { ClassItem } from './components/ClassItem/ClassItem'
import { classList } from './constants'

export const ClassFilter = (): JSX.Element => {
  return (
      <div className='filter-wrapper'>
          <div className='filter-header'>Класс корабля</div>
          <div className='class-filter'>
              { classList.map((value) => <ClassItem key={`class_item_${value.name}`} classInfo={ value } />)}
          </div>
      </div>
  )
}
