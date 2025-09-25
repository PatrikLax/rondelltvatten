import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';

interface ConfirmationModalProps {
  visible: boolean;
  spotNumber: number | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmationModal({ 
  visible, 
  spotNumber, 
  onConfirm, 
  onCancel 
}: ConfirmationModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <BlurView
        intensity={30}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
        style={styles.modalContainer}
      >
        <Text style={styles.header}>
          Du har valt tvättplats {spotNumber}
        </Text>
        <Text style={styles.text}>Bekräfta för att starta tvätten</Text>
        <View style={styles.modalButtonContainer}>
          <Pressable style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.text}>Bekräfta</Text>
          </Pressable>
          <Pressable style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.text}>Avbryt</Text>
          </Pressable>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
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