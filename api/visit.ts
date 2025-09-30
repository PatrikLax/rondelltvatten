import api from "./client";
import { Visit } from "./types";

export const visitApi = {
  createVisit: async (visitData: {
    UserId: number;
    SpotNumber: number;
    WashTime: number;
    Cost: number;
  }): Promise<Visit> => {
    const response = await api.post<Visit>("/api/visits", visitData);
    return response.data;
  },

  getVisits: async (): Promise<Visit[]> => {
    const response = await api.get<Visit[]>("/api/visits");
    return response.data;
  },
};
