import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function NotificationManager() {
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Notiser är avstängda!");
        return;
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hej! 👋",
          body: "Just nu har vi en kampanj, använd koden HÖST2025 för 50% rabatt!! 🤯",
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 30,
        },
      });
    })();
  }, []);

  return null;
}
