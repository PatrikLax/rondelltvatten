import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ThankYou() {
  const { spotNumber, washTime, cost } = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingVertical: insets.top + 20 }]}>
      <LottieView
        source={require("../assets/animations/SparkleFilter.json")}
        autoPlay
        loop
        style={StyleSheet.absoluteFillObject}
        resizeMode="center"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.thankYouText}>
          Tack för att du tvättade hos oss!
        </Text>
        <Text style={styles.details}>
          Plats: {spotNumber} | Tid: {washTime} | Kostnad: {cost}
        </Text>

        <Pressable
          onPress={() => {
            Alert.alert("Kvitto", "Inte implementerat än", [{ text: "OK" }]);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#2a8b95" : "#3ba2b6",
            },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>Visa kvitto</Text>
        </Pressable>

        <MaterialCommunityIcons
          name="check-circle-outline"
          size={100}
          color="white"
        />

        <LottieView
          source={require("../assets/animations/Car.json")}
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
        />

        <Pressable
          onPress={() => {
            router.replace("/");
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#2a8b95" : "#3ba2b6",
            },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>Gå till startsidan</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3ba2b6",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  thankYouText: {
    fontSize: 24,
    paddingVertical: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  details: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#2e899bff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
