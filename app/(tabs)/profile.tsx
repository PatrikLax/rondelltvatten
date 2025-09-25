import { Collapsible } from "@/components/ui/collapsible";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top + 5 }]}>
      <Text style={styles.header}>Din profil</Text>
      <Collapsible title="Saldo">
        <View style={styles.collapsible}>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Pressable>
            <Text style={styles.pressable}>Sätt in pengar</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.pressable}>Anslut ett nytt kort</Text>
          </Pressable>
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
      <Collapsible title="Saldo">
        <View>
          <Text style={styles.text}>Saldo: 120kr</Text>
        </View>
      </Collapsible>
      <Collapsible title="Saldo">
        <View>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Saldo: 120kr</Text>
          <Text style={styles.text}>Sista raden</Text>
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

  collapsible: {
    gap: 10,
  },

  pressable: {
    backgroundColor: "#fff"
  },
});
