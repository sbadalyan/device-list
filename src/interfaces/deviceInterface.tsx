import { DeviceStatusTypes } from "../enums/deviceEnum";

export interface IDevice {
  id: string;
  title: string;
  bands2g: string;
  bands3g: string;
  bands4g: string;
  status: DeviceStatusTypes;
  pickupDate: number;
}
