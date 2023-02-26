import { createSelector } from '@reduxjs/toolkit'
import { type store } from '../../../../../../store/store'

export const getCurrentValue = (state: ReturnType<typeof store.getState>): string => state.nationSelect.value

export const nationSelector = createSelector(getCurrentValue, value => value)
