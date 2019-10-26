import { getDevicesRequest } from './fonapiService';

export function deviceList(){
  const devices = [
    'Samsung Galaxy S9',
    'Samsung Galaxy S8',
    'Samsung Galaxy S7',
    'Motorola Nexus 6',
    'LG Nexus 5X',
    'Huawei Honor 7X',
    'Apple iPhone X',
    'Apple iPhone 8',
    'Apple iPhone 4s',
    'Nokia 3310'
  ];
 return devices;
}

export function getDevicesService(){
  return Promise.all(deviceList().map(device => {
      return getDevicesRequest(device).then((result: any) => {
        const matchingItem = result.find((item: any) => item.DeviceName === device)
        console.log(matchingItem);
        return {
          id: matchingItem.DeviceName,
          title: matchingItem.DeviceName,
          bands2g: matchingItem._2g_bands || '',
          bands3g: matchingItem._3g_bands || '', 
          bands4g: matchingItem._4g_bands || '', 
        };
      });
    })
  );
}