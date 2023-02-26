import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IShipOption {
  value: number
}

export const shipOptionsSlice = createSlice({
  name: 'currentShip',
  initialState: { value: 0 },
  reducers: {
    setCurrentShip: (state, action: PayloadAction<IShipOption>) => {
      state.value = action.payload.value
    }
  }
})

export const { setCurrentShip } = shipOptionsSlice.actions
