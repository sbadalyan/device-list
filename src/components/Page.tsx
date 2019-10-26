import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DataGrid } from './DataGrid';
import { loadDevices, pickupDevice  } from '../actions/deviceActions';
import { IState } from '../interfaces/stateInterface';

interface PageProps {
  loadDevices: any,
  devices: any,
  pickupDevice: any,
}

class Page extends Component<PageProps> {

  componentDidMount(){
    this.props.loadDevices();
  }

  render(){
    return <DataGrid devices={this.props.devices} pickupDevice={this.props.pickupDevice}/>;
  }
}

export default connect((state: IState) => ({
  devices: state.device && state.device.devices || [],
}), {
  loadDevices,
  pickupDevice,
})(Page);