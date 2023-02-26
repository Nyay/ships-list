import { type store } from '../../store/store'
import { createSelector } from '@reduxjs/toolkit'

const selectorFunction = (state: ReturnType<typeof store.getState>): string => state.shipSearch.value

export const searchSelector = createSelector(selectorFunction, value => value)
