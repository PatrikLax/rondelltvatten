import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { JSX, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type WashSpotsState = {
  [key: number]: boolean;
};

export default function WashScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const [washSpots, setWashSpots] = useState<WashSpotsState>({
    1: false, // false = ledig
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  // Endast för utveckling
  const resetWashSpots = (): void => {
    setWashSpots({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    });
  };

  const toggleWashSpot = (spotNumber: number): void => {
    setWashSpots((prev) => ({
      ...prev,
      [spotNumber]: !prev[spotNumber],
    }));
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleSpotPress = (spotNumber: number): void => {
    setSelectedSpot(spotNumber);
    setModalVisible(true);
  };

  const handleConfirm = (): void => {
    if (selectedSpot !== null) {
      toggleWashSpot(selectedSpot);
      setModalVisible(false);
      setSelectedSpot(null);
      router.push("/modal");
    }
  };

  const handleCancel = (): void => {
    setModalVisible(false);
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
      <Pressable
        onPress={() => {
          resetWashSpots();
        }}
      >
        <Text style={styles.header}>Välj tvättplats</Text>
      </Pressable>

      {[1, 2, 3, 4, 5, 6].map((spotNumber) => (
        <Pressable
          key={spotNumber}
          disabled={washSpots[spotNumber]}
          style={({ pressed }) => [
            styles.pressable,
            {
              backgroundColor: washSpots[spotNumber]
                ? "#adb5fc46"
                : "#adb5fcff",
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <BlurView intensity={30} tint="dark" experimentalBlurMethod="dimezisBlurView" style={styles.modalContainer}>
          <Text style={styles.header}>
            Du har valt tvättplats {selectedSpot}
          </Text>
          <Text style={styles.text}>Bekräfta för att starta tvätten</Text>
          <View style={styles.modalButtonContainer}>
            <Pressable style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.text}>Bekräfta</Text>
            </Pressable>
            <Pressable style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.text}>Avbryt</Text>
            </Pressable>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9ba4f5",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: "#28a745",
    padding: 10,
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    padding: 10,
  },
});
