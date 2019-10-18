import { IDevice } from './deviceInterface';

export interface IDeviceState {
  devices?: IDevice[];
}

export interface IState {
  device?: IDeviceState;
}
