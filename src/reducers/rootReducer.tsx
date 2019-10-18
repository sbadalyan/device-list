import { combineReducers } from 'redux';
import deviceReducer from './deviceReducer';
import { IState } from '../interfaces/stateInterface';
import { IAction } from '../interfaces/actionInterface';

export default combineReducers<IState, IAction<any>>({
  device: deviceReducer,
});
