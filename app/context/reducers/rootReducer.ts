import { combineReducers } from 'redux';
import doctorReducer from './doctorReducer';
import clinicReducer from './clinicReducer';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
  doctors: doctorReducer,
  clinics: clinicReducer,
  appointments: appointmentReducer,
});

export default rootReducer;
