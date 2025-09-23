import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ModalScreen() {
  const insets = useSafeAreaInsets();

  const handleCancel = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push("/");
  };

  return (
    <View style={[styles.container, { paddingVertical: insets.top + 5 }]}>
      <Text style={styles.header}>Du kan nu börja tvätta</Text>
      <View style={styles.carwashIcon}>
        <MaterialCommunityIcons name="car-wash" size={200} color="#fff" />
      </View>
      <Pressable
        onPress={() => {handleCancel()}}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressablePressed,
        ]}
      >
        <Text style={styles.text}>Avsluta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#9ba4f5",
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
