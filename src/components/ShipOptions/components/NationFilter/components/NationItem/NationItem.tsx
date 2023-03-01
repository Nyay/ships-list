import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNation } from './nationItemSlice'
import { nationSelector } from './nationItemSelectors'
import { NationItemStyled } from './NationItem.styled'
import { type INationItem } from './types'

export const NationItem = ({ nationInfo }: INationItem): JSX.Element => {
  const currentNation = useSelector(nationSelector)
  const dispatch = useDispatch()

  const handleOnClick = useCallback(() => {
    dispatch(setNation({ value: nationInfo.name }))
  }, [])

  return (
        <NationItemStyled
            key={`nationItem_${nationInfo.name}`}
            onClick={ handleOnClick }
            isSelected={ currentNation === nationInfo.name }
        >
            { nationInfo.translation }
        </NationItemStyled>
  )
}
