const fonoApiUrl = 'https://fonoapi.freshpixl.com/v1/';

function fonoApiRequest(endpoint: string, body: any) {
  return fetch(`${fonoApiUrl}${endpoint}`, {
    method: 'POST',
    body:JSON.stringify({
      token: 'fccb062cfeea4f0e5ed84cbbe52cda366469ae1a1beb8bc1',
      ...body,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    return response.json();
  });
}

export function getDevicesRequest(device: string) {
  return fonoApiRequest('getdevice', {
    device,
  });
}
