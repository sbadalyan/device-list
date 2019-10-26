import { IAction } from '../interfaces/actionInterface';
import { IDevice } from '../interfaces/deviceInterface';
import { IDeviceState } from '../interfaces/stateInterface';
import { DeviceActionTypes, DeviceStatusTypes } from '../enums/deviceEnum';
import { Reducer } from 'react';
import { IStatusChange } from '../interfaces/statusChangeInterface';

type PayloadTypes = IDevice | IDevice[] | IStatusChange;

function loadDevices(state: IDeviceState, payload: PayloadTypes): IDeviceState {
 const devices = payload as IDevice[];
  return {
    ...state,
    devices,
  };
}

function pickupDevice(state: IDeviceState, payload: PayloadTypes): IDeviceState {
  const statusChange = payload as IStatusChange;
  const devices = state.devices || [];
   return {
     ...state,
     devices: devices.map(device => {
       if(device.id === statusChange.deviceId){
         return {
           ...device, status: DeviceStatusTypes.Inuse, pickupDate: Date.now()
         }
       }
       return device;
      })
   };
 }

 function returnDevice(state: IDeviceState, payload: PayloadTypes): IDeviceState {
  const devices = payload as IStatusChange;
   return {
     ...state,
     //devices,
   };
 }

const reducerMap: Record<string, Reducer<IDeviceState, PayloadTypes>> = {
  [DeviceActionTypes.LoadDevices]: loadDevices,
  [DeviceActionTypes.PickupDevice]: pickupDevice,
  [DeviceActionTypes.ReturnDevice]: returnDevice,
};


export default function deviceReducer(state: IDeviceState | undefined , action: IAction<PayloadTypes>): IDeviceState {
  const reducer = reducerMap[action.type];
  const currentState = state || {};
  if (typeof reducer === 'function') {
    return reducer(currentState, action.payload);
  }
  return {...currentState};
}
