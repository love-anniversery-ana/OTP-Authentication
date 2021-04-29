import { combineReducers } from 'redux';
import {
  userNumberReducer,
  userVerifyReducer,
  userResendReducer,
} from './component/redux/reducers/authReducers';

const rootReducers = combineReducers({
  userNum: userNumberReducer,
  userVer: userVerifyReducer,
  userRes: userResendReducer,
});

export default rootReducers;
