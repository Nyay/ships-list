import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IShipOption {
  value: string
}

export const shipOptionsSlice = createSlice({
  name: 'currentShip',
  initialState: { value: '' },
  reducers: {
    setCurrentShip: (state, action: PayloadAction<IShipOption>) => {
      state.value = action.payload.value
    }
  }
})

export const { setCurrentShip } = shipOptionsSlice.actions
