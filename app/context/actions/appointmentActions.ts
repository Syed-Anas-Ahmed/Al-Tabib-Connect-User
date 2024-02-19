// actions/appointmentActions.ts

export const addAppointment = (doctorId: number, clinicId: number, clinic: Clinic) => ({
  type: 'ADD_APPOINTMENT' as const,
  payload: { doctorId, clinicId, clinic },
});

// actions/clinicActions.ts
import { Clinic } from '../types';

export const addClinic = (clinic: Clinic) => ({
  type: 'ADD_CLINIC' as const,
  payload: clinic,
});

