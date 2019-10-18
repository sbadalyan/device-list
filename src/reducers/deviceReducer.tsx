import { IAction } from '../interfaces/actionInterface';
import { IDevice } from '../interfaces/deviceInterface';
import { IDeviceState } from '../interfaces/stateInterface';
import { DeviceActionTypes } from '../enums/deviceEnum';
import { Reducer } from 'react';

type PayloadTypes = IDevice | IDevice[];

function loadDevices(state: IDeviceState, payload: PayloadTypes): IDeviceState {
 const devices = payload as IDevice[];
  return {
    ...state,
    devices,
  };
}

const reducerMap: Record<string, Reducer<IDeviceState, PayloadTypes>> = {
  [DeviceActionTypes.LoadDevices]: loadDevices,
};


export default function deviceReducer(state: IDeviceState | undefined , action: IAction<PayloadTypes>): IDeviceState {
  const reducer = reducerMap[action.type];
  const currentState = state || {};
  if (typeof reducer === 'function') {
    return reducer(currentState, action.payload);
  }
  return {...currentState};
}
