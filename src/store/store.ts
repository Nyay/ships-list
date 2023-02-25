import {configureStore} from "@reduxjs/toolkit";
import {shipSearchSlice} from "../components/ShipOptions/components/ShipSearch/shipSearchSlice";
import {shipsData} from "../services/shipsData";
import {shipOptionsSlice} from "../components/ShipOptions/shipOptionsSlice";

export const store = configureStore({
    reducer: {
        shipSearch: shipSearchSlice.reducer,
        setCurrentShip: shipOptionsSlice.reducer,
        [shipsData.reducerPath]: shipsData.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shipsData.middleware)
})