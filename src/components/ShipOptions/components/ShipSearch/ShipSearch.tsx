import React, { ChangeEvent, useCallback } from 'react';
import './ShipSearch.css';
import { debounce } from 'lodash';
import {useDispatch} from "react-redux";
import {setShipSearch} from "./shipSearchSlice";

export const ShipSearch = () => {

    const dispatch = useDispatch();

    const onChange = useCallback(debounce(( event:ChangeEvent<HTMLInputElement> ) => {
        dispatch(setShipSearch({value: event.target.value}))
    }, 1000), [])

    return (
        <div className='ship-search'>
            <img className='ship-search-icon' src='src/shared/search.png' alt=''/>
            <input className='ship-search-input' onChange={onChange}/>
        </div>
    )
}