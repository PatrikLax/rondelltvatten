export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Visit {
  id: number;
  userId: number;
  spotNumber: number;
  washTime: number;
  cost: number;
  timestamp: string;
}

export type VisitCreate = Omit<Visit, "id" | "timestamp">;
