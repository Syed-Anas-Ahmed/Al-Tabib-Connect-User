export interface Doctor {
    id: number;
    drImage: string;
    drName: string;
    drQual: string;
    clinics: Clinic[];
  }
  
  export interface Clinic {
    id: number;
    clinicName: string;
    clinicAddress: string;
    clinicFees: string;
    clinicTimings: string;
  }
  
  export interface Appointment {
    doctorId: number;
    clinicId: number;
  }
  