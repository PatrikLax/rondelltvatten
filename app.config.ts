import "dotenv/config";
import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Rondellentvätten",
  slug: "rondellen-tvatten",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "rondellentvatten",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "se.patriklax.rondellentvatten",
    adaptiveIcon: {
      backgroundColor: "#3ba2b6",
      foregroundImage: "./assets/images/icon.png",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },
  web: {
    output: "static",
    favicon: "./assets/images/splash-icon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#3ba2b6",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
    [
      "expo-location",
      {
        locationAlwaysAndWhenInUsePermission:
          "Rondelltvätten behöver ha åtkomst till din position för att avgöra om du är vid tvätten",
      },
    ],
    ["expo-web-browser"],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    apiUrl: process.env.API_URL,
    apiKey: process.env.API_KEY,
    eas: {
      projectId: "01900df0-0960-4741-b3dd-48a6de86b552",
    },
  },
};

export default config;
