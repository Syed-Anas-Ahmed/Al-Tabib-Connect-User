// reducers/appointmentReducer.ts
import { Appointment } from '../types';

const initialState: Appointment[] = [];

const appointmentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default appointmentReducer;