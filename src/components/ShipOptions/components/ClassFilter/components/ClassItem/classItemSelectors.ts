import { type store } from '../../../../../../store/store'
import { createSelector } from '@reduxjs/toolkit'

export const getCurrentValue = (state: ReturnType<typeof store.getState>): string => state.classSelect.value

export const classSelector = createSelector(getCurrentValue, value => value)
