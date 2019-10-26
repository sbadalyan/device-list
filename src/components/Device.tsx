import React, {Component} from 'react';
import { Row, Col } from 'react-grid-system';
import { IDevice } from '../interfaces/deviceInterface';


interface DeviceProps {
  device: IDevice,
  pickupDevice: any,
}

export class Device extends Component<DeviceProps> {

  state = {
    users:['Davit', 'Elita', 'Areg'],
  }

  handleUserChange = (event: any) => {
    const user = event.target.value;
    const { device, pickupDevice } = this.props;
    pickupDevice({deviceId: device.id, userId: user}); 
  }

  render(){
   const { device } = this.props;
    return (
      <Row key={device.title}>
        <Col sm={2}>
          {device.title}
        </Col>
        <Col sm={2}>
          {device.bands2g}
        </Col>
        <Col sm={2}>
          {device.bands3g}
        </Col>
        <Col sm={2}>
          {device.bands4g}
        </Col>
        <Col sm={1}>
          Availability
        </Col>
        <Col sm={1}>
         {device.pickupDate}       
        </Col>
        <Col sm={1}>
       
        </Col>
        <Col sm={1}>
         {this.renderUsers()}
        </Col>
      </Row>  
    );
  }
    
  renderUsers(){
    const { users } = this.state;
    return(
      <select onChange={this.handleUserChange}>
        <option key='' value=''>Select user</option>
        {users.map((user: string) => <option key={user} value={user}>{user}</option>)}
      </select>
    );
  }
}
