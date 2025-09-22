import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.container, { paddingTop: insets.top + 5 }]}>
        <Text style={styles.header}>Rondelltvätten</Text>
        <View style={styles.pressableContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              pressed && styles.pressablePressed,
            ]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              router.push("/wash");
            }}
          >
            <Text style={styles.text}>Börja tvätta</Text>
            <MaterialCommunityIcons name="car-wash" size={24} color="#ffffff" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              pressed && styles.pressablePressed,
            ]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          >
            <Text style={styles.text}>Vart finns vi?</Text>
            <MaterialCommunityIcons
              name="map-marker"
              size={24}
              color="#ffffff"
            />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              pressed && styles.pressablePressed,
            ]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          >
            <Text style={styles.text}>Så här tvättar du</Text>
            <MaterialCommunityIcons
              name="book-open-variant"
              size={24}
              color="#ffffff"
            />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9ba4f5ff",
  },
  header: {
    fontSize: 40,
    marginVertical: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  pressableContainer: {
    gap: 10,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  pressable: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#007AFF",
    borderRadius: 5,
    minWidth: 250,
    alignItems: "center",
  },
  pressablePressed: {
    backgroundColor: "#0056CC",
    transform: [{scale: 0.96}],
  },
});
