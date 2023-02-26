import React, { useCallback, useState } from 'react'
import { type IClassInfo } from './types'
import './ClassItem.css'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { classSelector } from './classItemSelectors'
import { setClass } from './classItemSlice'

export const ClassItem = ({ classInfo }: { classInfo: IClassInfo }): JSX.Element => {
  const [isHover, setIsHover] = useState(false)

  const dispatch = useDispatch()

  const currentClass = useSelector(classSelector)
  const handleOnClick = useCallback(() => {
    dispatch(setClass({ value: classInfo.name }))
  }, [])
  return (
      <div
          className={classNames('class-item', { 'current-class': currentClass === classInfo.name })}
          onClick={handleOnClick}
          onMouseEnter={() => { setIsHover(true) }}
          onMouseLeave={() => { setIsHover(false) }}
      >
          { classInfo.imgLink
            ? <img className='class-item-img' src={classInfo.imgLink} alt={classInfo.name}/>
            : classInfo.translation }
          <div
              className={classNames('class-notation', { 'class-notation-display': isHover && classInfo.imgLink })}
          >{classInfo.translation}</div>
      </div>
  )
}
