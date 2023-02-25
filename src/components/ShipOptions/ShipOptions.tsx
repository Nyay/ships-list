import React from 'react';
import './ShipOptions.css';
import { ShipSearch } from './components/ShipSearch/ShipSearch';
import { useSelector } from "react-redux";
import { store } from "../../store/store";
import { ShipTab } from "./components/ShipTab/ShipTab";
import { useGetShipsDataQuery } from "../../services/shipsData";

const validateTag = ( tagList: string[] ) =>
    !tagList.includes('preserved') && !tagList.includes('clan') && !tagList.includes('catalogueHiddenIfMissing');

const validateSearch = ( shipName: string, search: string ) =>
    shipName.startsWith(search);

export const ShipOptions = () => {

    const search = useSelector((state: ReturnType<typeof store.getState>) => state.shipSearch.value)
    const { data } = useGetShipsDataQuery('');

    let shipList = [];

    if (data) {
        for (const value in data.data) {
            const tagList = data.data[value].tags
            if ( validateTag(tagList) && validateSearch(data.data[value].localization.shortmark.ru, search) ) {
                shipList.push({
                    id: value,
                    type: tagList[0],
                    name: data.data[value].localization.shortmark.ru,
                    description: data.data[value].localization.ru
                })
            }
        }
    }

    return (
        <div className='ship-options' >
            <ShipSearch />
            <div className='overflow-control'>
                { shipList.map((ship) => <ShipTab key={+ship.id} shipId={+ship.id} shipName={ ship.name } />)}
            </div>
        </div>
    )
}


