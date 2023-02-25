import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IShipSearch {
    value: string
}

export const shipSearchSlice = createSlice({
    name: 'shipSearch',
    initialState: { value: '' },
    reducers: {
        setShipSearch: (state, action:PayloadAction<IShipSearch>) => {
            state.value = action.payload.value;
        }
    }
})

export const { setShipSearch } = shipSearchSlice.actions;