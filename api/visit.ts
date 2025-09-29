import api from "./client";
import { Visit } from "./types";

export const visitApi = {
  createVisit: async (visitData: Visit): Promise<Visit> => {
    const response = await api.post<Visit>("/visits", visitData);
    return response.data;
  },

  getVisits: async (): Promise<Visit[]> => {
    const response = await api.get<Visit[]>("/visits");
    return response.data;
  },
};
