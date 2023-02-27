import { configureStore } from '@reduxjs/toolkit'
import { shipSearchSlice } from '../components/ShipOptions/components/ShipSearch/shipSearchSlice'
import { shipsData } from '../services/shipsData'
import { shipOptionsSlice } from '../components/ShipOptions/shipOptionsSlice'
import { nationItemSlice } from '../components/ShipOptions/components/NationFilter/components/NationItem/nationItemSlice'
import { classItemSlice } from '../components/ShipOptions/components/ClassFilter/components/ClassItem/classItemSlice'

export const store = configureStore({
  reducer: {
    nationSelect: nationItemSlice.reducer,
    shipSearch: shipSearchSlice.reducer,
    setCurrentShip: shipOptionsSlice.reducer,
    [shipsData.reducerPath]: shipsData.reducer,
    classSelect: classItemSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipsData.middleware)
})
