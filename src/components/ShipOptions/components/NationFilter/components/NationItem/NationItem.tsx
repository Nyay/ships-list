import React, { useCallback } from 'react'
import './NationItem.css'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setNation } from './nationItemSlice'
import { nationSelector } from './nationItemSelectors'

interface INationInfo {
  name: string
  translation: string
}

interface INationItem {
  nationInfo: INationInfo
}

export const NationItem = ({ nationInfo }: INationItem): JSX.Element => {
  const currentNation = useSelector(nationSelector)
  const dispatch = useDispatch()

  const handleOnClick = useCallback(() => {
    dispatch(setNation({ value: nationInfo.name }))
  }, [])

  return (
        <div
            key={`nationItem_${nationInfo.name}`}
            className={classNames('nation-item', { 'current-nation': currentNation === nationInfo.name })}
            onClick={ handleOnClick }
        >
            { nationInfo.translation }
        </div>
  )
}
