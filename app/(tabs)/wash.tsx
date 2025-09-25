import ConfirmationModal from "@/components/ui/confirmModal";
import StartWashingModal from "@/components/ui/startWashingModal";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { JSX, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type WashSpotsState = {
  [key: number]: boolean;
};

export default function WashScreen() {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [startWashingVisible, setStartWashingVisible] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const [washSpots, setWashSpots] = useState<WashSpotsState>({
    1: false, // false = ledig
    2: false,
    3: false,
    4: true,
    5: false,
    6: false,
  });

  const toggleWashSpot = (spotNumber: number): void => {
    setWashSpots((prev) => ({
      ...prev,
      [spotNumber]: !prev[spotNumber],
    }));
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleSpotPress = (spotNumber: number): void => {
    setSelectedSpot(spotNumber);
    setConfirmModalVisible(true);
  };

  const handleConfirm = (): void => {
    if (selectedSpot !== null) {
      toggleWashSpot(selectedSpot);
      setConfirmModalVisible(false);
      setStartWashingVisible(true);
    }
  };

  const handleCancel = (): void => {
    setConfirmModalVisible(false);
    setSelectedSpot(null);
  };

  const handleFinishWashing = (washTime: string, cost: string): void => {
  if (selectedSpot !== null) {
    toggleWashSpot(selectedSpot);
  }
  setStartWashingVisible(false);

  router.replace({
    pathname: "/thankYou",
    params: {
      spotNumber: selectedSpot,
      washTime: washTime,
      cost: cost,
    },
  });

  setSelectedSpot(null);
};

  const getStatusIcon = (isOccupied: boolean): JSX.Element => {
    return isOccupied ? (
      <MaterialCommunityIcons name="garage-lock" size={30} color="#fff" />
    ) : (
      <MaterialCommunityIcons name="garage-open" size={30} color="#fff" />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Välj tvättplats</Text>
      {[1, 2, 3, 4, 5, 6].map((spotNumber) => (
        <Pressable
          key={spotNumber}
          disabled={washSpots[spotNumber]}
          style={({ pressed }) => [
            styles.pressable,
            {
              backgroundColor: washSpots[spotNumber]
                ? "#adb5fc46"
                : "#59bcd0ff",
            },
            pressed && styles.pressablePressed,
          ]}
          onPress={() => handleSpotPress(spotNumber)}
        >
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                { opacity: washSpots[spotNumber] ? 0.5 : 1 },
              ]}
            >
              Tvättplats {spotNumber}
            </Text>
            <Text style={styles.statusText}>
              {getStatusIcon(washSpots[spotNumber])}
            </Text>
          </View>
        </Pressable>
      ))}

      <ConfirmationModal
        visible={confirmModalVisible}
        spotNumber={selectedSpot}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <StartWashingModal
        visible={startWashingVisible}
        selectedSpot={selectedSpot}
        onFinishWashing={handleFinishWashing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3ba2b6",
    gap: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  statusText: {
    fontSize: 16,
    color: "#ffffff",
    opacity: 0.9,
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    minWidth: 270,
  },
  pressablePressed: {
    opacity: 0.8,
    transform: [{ scale: 0.96 }],
  },
});
