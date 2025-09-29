export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Visit {
  id?: number;
  userId: number;
  spotNumber: string;
  washTime: string;
  cost: string;
  timestamp?: string;
}
