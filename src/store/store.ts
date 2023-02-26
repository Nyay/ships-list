import { configureStore } from '@reduxjs/toolkit'
import { shipSearchSlice } from '../components/ShipOptions/components/ShipSearch/shipSearchSlice'
import { shipsData } from '../services/shipsData'
import { shipOptionsSlice } from '../components/ShipOptions/shipOptionsSlice'
import { nationItemSlice } from '../components/ShipOptions/components/NationFilter/components/NationItem/nationItemSlice'

export const store = configureStore({
  reducer: {
    nationSelect: nationItemSlice.reducer,
    shipSearch: shipSearchSlice.reducer,
    setCurrentShip: shipOptionsSlice.reducer,
    [shipsData.reducerPath]: shipsData.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipsData.middleware)
})
