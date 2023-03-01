import React, { type ChangeEvent, useCallback } from 'react'
import { debounce } from 'lodash'
import { useDispatch } from 'react-redux'
import { setShipSearch } from './shipSearchSlice'
import { ShipSearchIconStyled, ShipSearchInputStyled } from './components'
import { ShipSearchStyled } from './ShipSearch.styled'

export const ShipSearch = (): JSX.Element => {
  const dispatch = useDispatch()

  const onChange = useCallback(debounce((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setShipSearch({ value: event.target.value }))
  }, 1000), [])

  return (
        <ShipSearchStyled>
            <ShipSearchIconStyled src='src/shared/search.png' alt=''/>
            <ShipSearchInputStyled onChange={onChange}/>
        </ShipSearchStyled>
  )
}
