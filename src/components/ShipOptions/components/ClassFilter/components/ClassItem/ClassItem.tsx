import React, { useCallback, useState } from 'react'
import { type IClassInfo } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { classSelector } from './classItemSelectors'
import { setClass } from './classItemSlice'
import { ClassImageStyled, ClassNotationStyled } from './components'
import { ClassItemStyled } from './ClassItem.styled'

export const ClassItem = ({ classInfo }: { classInfo: IClassInfo }): JSX.Element => {
  const [isHover, setIsHover] = useState(false)

  const dispatch = useDispatch()

  const currentClass = useSelector(classSelector)
  const handleOnClick = useCallback(() => {
    dispatch(setClass({ value: classInfo.name }))
  }, [])
  return (
      <ClassItemStyled
          isCurrent={currentClass === classInfo.name}
          onClick={handleOnClick}
          onMouseEnter={() => { setIsHover(true) }}
          onMouseLeave={() => { setIsHover(false) }}
      >
          { classInfo.imgLink
            ? <ClassImageStyled src={classInfo.imgLink} alt={classInfo.name}/>
            : classInfo.translation }
          <ClassNotationStyled isActive={ isHover && classInfo.imgLink }>
              {classInfo.translation}
          </ClassNotationStyled>
      </ClassItemStyled>
  )
}
