import api from "./client";
import { Visit, VisitCreate } from "./types";

export const visitApi = {
  createVisit: async (visitData: VisitCreate): Promise<Visit> => {
    const backendPayload = {
      UserId: visitData.userId,
      SpotNumber: visitData.spotNumber,
      WashTime: visitData.washTime,
      Cost: visitData.cost,
    };

    const response = await api.post("/api/visits", backendPayload);

    return {
      id: response.data.id,
      userId: response.data.userId,
      spotNumber: response.data.spotNumber,
      washTime: response.data.washTime,
      cost: response.data.cost,
      timestamp: response.data.timestamp,
    };
  },

  getVisits: async (): Promise<Visit[]> => {
    const response = await api.get("/api/visits");

    return response.data.map((visit: any) => ({
      id: visit.id,
      userId: visit.userId,
      spotNumber: visit.spotNumber,
      washTime: visit.washTime,
      cost: visit.cost,
      timestamp: visit.timestamp,
    }));
  },
};
