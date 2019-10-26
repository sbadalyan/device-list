import { DeviceActionTypes } from '../enums/deviceEnum';
import { Dispatch } from 'react';
import { IAction } from '../interfaces/actionInterface';
import { getDevicesService } from '../services/deviceService';

export function loadDevices() {
  return async function action(dispatch: Dispatch<IAction<any>>) {
    const devices = await getDevicesService();
    dispatch({
      type: DeviceActionTypes.LoadDevices,
      payload: devices,
    });
  }
}

export function pickupDevice(data: object) {
  return (dispatch: Dispatch<IAction<any>>) =>{
    dispatch({
      type: DeviceActionTypes.PickupDevice,
      payload: data,
    });
  }
}