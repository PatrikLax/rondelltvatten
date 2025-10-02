import { Collapsible } from "@/components/ui/collapsible";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top + 5 }]}>
      <Text style={styles.header}>Din profil</Text>
      <Collapsible title="Saldo">
        <View>
          <View style={styles.saldoContainer}>
            <Text style={styles.textBig}>Saldo</Text>
            <Text style={styles.textBig}>120kr</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.pressable}>
              <Text style={styles.textSmall}>Sätt in pengar</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
              <Text style={styles.textSmall}>Anslut ett kort</Text>
            </Pressable>
          </View>
        </View>
      </Collapsible>
      <Collapsible title="Mina kunduppgifter">
        <View>
          <Text style={styles.text}>Namn: Dev</Text>
          <Text style={styles.text}>Efternamn: Devson</Text>
          <Text style={styles.text}>Telefonnummer: 0707-123456</Text>
          <Text style={styles.text}>Placeholder: placeholder</Text>
        </View>
      </Collapsible>
      <Collapsible title="Kontakta oss">
        <View>
          <Text style={styles.text}>Tel: 0707-12 34 56</Text>
          <Text style={styles.text}>
            Mail:{" "}
            <Link
              href={
                "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
              }
            >
              <Text style={styles.textLink}>customer@rondelltvatten.nu</Text>
            </Link>
          </Text>
        </View>
      </Collapsible>
      <Collapsible title="Kvitton/besök">
        <View style={styles.textContainer}>
          <Text style={styles.textDate}>Datum: 2025-09-04 12:45</Text>
          <Text style={styles.textSmall}>Tvättplats: 5</Text>
          <Text style={styles.textSmall}>Tidsåtgång: 16min</Text>
          <Text style={styles.textSmall}>Kostnad: 73kr</Text>
          <Text style={styles.textSmallRight}>
            Visa kvitto{" "}
            <MaterialCommunityIcons
              name="receipt-text-outline"
              size={24}
              color="#fff"
            />
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textDate}>Datum: 2025-09-07 09:35</Text>
          <Text style={styles.textSmall}>Tvättplats: 7</Text>
          <Text style={styles.textSmall}>Tidsåtgång: 18min</Text>
          <Text style={styles.textSmall}>Kostnad: 79kr</Text>
          <Text style={styles.textSmallRight}>
            Visa kvitto{" "}
            <MaterialCommunityIcons
              name="receipt-text-outline"
              size={24}
              color="#fff"
            />
          </Text>
        </View>
      </Collapsible>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3ba2b6",
    padding: 20,
  },
  saldoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    borderWidth: 0.5,
    borderColor: "#ffffff4c",
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  header: {
    fontSize: 40,
    marginVertical: 40,
    color: "#fff",
    fontWeight: "bold",
  },

  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textDate: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 3,
  },
  textSmall: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  textBig: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  textSmallRight: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
  textLink: {
    fontSize: 15,
    color: "#0033ffff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  pressable: {
    fontSize: 20,
    backgroundColor: "#288b19ff",
    padding: 10,
    flex: 1,
  },
});
