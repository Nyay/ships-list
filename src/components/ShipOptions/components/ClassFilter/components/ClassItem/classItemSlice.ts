import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IClassItemSlice {
  value: string
}

export const classItemSlice = createSlice({
  name: 'classSelect',
  initialState: { value: 'all' },
  reducers: {
    setClass: (state, action: PayloadAction<IClassItemSlice>) => {
      state.value = action.payload.value
    }
  }
})

export const { setClass } = classItemSlice.actions
