import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ConfirmCloseWashModal from "./confirmCloseWashModal";
import PriceCounter from "./priceCounter";
import TimerClock from "./timer";

interface StartWashingModalProps {
  visible: boolean;
  selectedSpot: number | null;
  onFinishWashing: (washTimeSeconds: number, cost: number) => void;
}

export default function StartWashingModal({
  visible,
  selectedSpot,
  onFinishWashing,
}: StartWashingModalProps) {
  const insets = useSafeAreaInsets();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [washTimeSeconds, setWashTimeSeconds] = useState(0);
  const [currentCost, setCurrentCost] = useState(10);

  const handleFinishWashing = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onFinishWashing(washTimeSeconds, currentCost);
  };

  const handlePressAvsluta = () => {
    setShowConfirmModal(true);
  };

  useEffect(() => {
    if (!visible) {
      setShowConfirmModal(false);
    }
  }, [visible]);

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={[styles.container, { paddingVertical: insets.top + 5 }]}>
        <Text style={styles.header}>Tvättplats {selectedSpot}</Text>
        <Text style={styles.text}>Välj program och börja tvätta</Text>
        <View style={styles.infoContainer}>
          <TimerClock
            startTimer={true}
            onTimeUpdate={(seconds) => setWashTimeSeconds(seconds)}
          />
          <PriceCounter
            startPriceCounter={true}
            onPriceUpdate={setCurrentCost}
          />
        </View>
        <View style={styles.carwashIcon}>
          <MaterialCommunityIcons name="car-wash" size={200} color="#fff" />
        </View>
        <Pressable
          onPress={handlePressAvsluta}
          style={({ pressed }) => [
            styles.pressable,
            pressed && styles.pressablePressed,
          ]}
        >
          <Text style={styles.buttonText}>Avsluta tvätt</Text>
        </Pressable>
      </View>
      <ConfirmCloseWashModal
        visible={showConfirmModal}
        onConfirm={handleFinishWashing}
        onCancel={() => {
          setShowConfirmModal(false);
        }}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3ba2b6",
  },
  infoContainer: {
    marginTop: 15,
    minWidth: "90%",
    maxWidth: 400,
    padding: 20,
    gap: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#ffffff86",
  },
  header: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  carwashIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffffff",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 30,
    padding: 10,
    borderRadius: 5,
    minWidth: 270,
    backgroundColor: "#ff3b30",
  },
  pressablePressed: {
    opacity: 0.8,
    transform: [{ scale: 0.96 }],
  },
});
