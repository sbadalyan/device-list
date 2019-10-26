import React, {Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { IDevice } from '../interfaces/deviceInterface';
import { Device } from './Device';
import { pickupDevice } from '../actions/deviceActions';


interface DataGridProps {
  devices: IDevice[],
  pickupDevice: any,
}

export class DataGrid extends Component<DataGridProps> {

 
  render(){
    return(
      <Container>
        {this.renderGridHeader()}
        {this.props.devices.map((device) => {
          return <Device key={device.id} device={device} pickupDevice={this.props.pickupDevice} />;
        })}
      </Container>
    );
  }

  renderGridHeader(){
    return (
      <Row>
        <Col sm={2}>
          Phone
        </Col>
        <Col sm={2}>
          Bands 2G
        </Col>
        <Col sm={2}>
          Bands 3G
        </Col>
        <Col sm={2}>
          Bands 4G
        </Col>
        <Col sm={1}>
          Availability
        </Col>
        <Col sm={1}>
          Pick up time
        </Col>
        <Col sm={1}>
          Return time
        </Col>
        <Col sm={1}>
          Username
        </Col>
      </Row>
    );
  }
 
}
