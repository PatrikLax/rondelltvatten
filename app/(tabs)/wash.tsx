import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Haptics from "expo-haptics";

export default function WashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Välj tvättplats</Text>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressablePressed,
        ]}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text style={styles.text}>Tvättplats 1</Text>
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
        <Text style={styles.text}>Tvättplats 2</Text>
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
        <Text style={styles.text}>Tvättplats 3</Text>
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
        <Text style={styles.text}>Tvättplats 4</Text>
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
        <Text style={styles.text}>Tvättplats 5</Text>
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
        <Text style={styles.text}>Tvättplats 6</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9ba4f5",
    gap: 20,
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
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#adb5fc",
    padding: 15,
    borderRadius: 5,
    minWidth: 270,
  },
  pressablePressed: {
    backgroundColor: "#adb5fc81",
    transform: [{ scale: 0.96 }],
  },
});
