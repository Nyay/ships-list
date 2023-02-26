import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface INationItemSlice {
  value: string
}

export const nationItemSlice = createSlice({
  name: 'nationSelect',
  initialState: { value: 'all' },
  reducers: {
    setNation: (state, action: PayloadAction<INationItemSlice>) => {
      state.value = action.payload.value
    }
  }
})

export const { setNation } = nationItemSlice.actions
