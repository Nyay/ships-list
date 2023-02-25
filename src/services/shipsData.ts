import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shipsData = createApi({
    reducerPath: 'shipsData',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://vortex.worldofwarships.eu/',
    }),
    endpoints: (builder) => ({
        getShipsData: builder.query({
            query: (arg) => 'api/encyclopedia/en/vehicles/'
        })
    })
})

export const { useGetShipsDataQuery } = shipsData;