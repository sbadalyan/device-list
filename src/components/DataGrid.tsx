import React, {Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { IDevice } from '../interfaces/deviceInterface';

interface DataGridProps {
  devices: IDevice[],
}

export class DataGrid extends Component<DataGridProps> {

  render(){
    return(
      <Container>
        {this.renderGridHeader()}
        {this.props.devices.map((device) => {
          return this.renderGridRow(device);
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
  renderGridRow(device: IDevice){
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
