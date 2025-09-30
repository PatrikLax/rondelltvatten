import axios from "axios";
import Constants from "expo-constants";

const apiUrl = Constants.expoConfig?.extra?.apiUrl;
const apiKey = Constants.expoConfig?.extra?.apiKey;

console.log("API URL:", apiUrl);
console.log("API Key exists:", !!apiKey);

const api = axios.create({
  baseURL: apiUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
  },
});

export default api;
