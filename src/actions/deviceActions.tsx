import { DeviceActionTypes } from '../enums/deviceEnum';
import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'react';
import { IAction } from '../interfaces/actionInterface';
import { getDevicesRequest } from '../services/fonapiService';
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
