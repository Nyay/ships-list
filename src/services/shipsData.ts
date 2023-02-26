import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type IShipResponse } from './types'

const validateTag = (tagList: string[]): boolean =>
  !tagList.includes('preserved') && !tagList.includes('clan') && !tagList.includes('catalogueHiddenIfMissing')

export const shipsData = createApi({
  reducerPath: 'shipsData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vortex.worldofwarships.eu/'
  }),
  endpoints: (builder) => ({
    getShipsData: builder.query({
      query: () => 'api/encyclopedia/en/vehicles/',
      transformResponse: (baseQueryReturnValue: IShipResponse) => {
        const { data } = baseQueryReturnValue
        const resultList = []

        for (const value in data) {
          const tagList = data[value].tags
          if (validateTag(tagList)) {
            const shipData = data[value]
            resultList.push({
              id: value,
              class: shipData.tags[0],
              name: shipData.localization.mark.ru,
              description: shipData.localization.description.ru,
              level: shipData.level,
              contour: shipData.icons.contour
            })
          }
        }

        return { fullData: data, shipsList: resultList }
      }
    })
  })
})

export const { useGetShipsDataQuery } = shipsData
