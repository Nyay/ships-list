import React, {useCallback} from 'react';
import './ShipTab.css';
import { IShipTab } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentShip } from '../../shipOptionsSlice';
import { store } from '../../../../store/store';
import classNames from 'classnames';

export const ShipTab = ({ shipName, shipId }: IShipTab) => {

    const currentShip = useSelector((state: ReturnType<typeof store.getState>) => state.setCurrentShip.value);

    const dispatch = useDispatch()

    const handleOnClick = useCallback(() => {
        dispatch(setCurrentShip({ value: shipId }))
    }, [])

    return (
        <div
            className={classNames('ship-tab', { 'current-ship': currentShip === shipId })}
            onClick={handleOnClick}
        >
            { shipName }
        </div>
    )
}