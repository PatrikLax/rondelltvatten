import { BlurView } from "expo-blur";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading() {
  return (
    <BlurView
      intensity={30}
      tint="dark"
      experimentalBlurMethod="dimezisBlurView"
      style={styles.modalContainer}
    >
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  spinnerContainer: {
    transform: [{ scale: 2 }],
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
  },
});
