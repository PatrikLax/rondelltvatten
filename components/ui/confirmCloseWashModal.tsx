import { BlurView } from "expo-blur";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface ConfirmCloseWashModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmCloseWashModal({
  visible,
  onConfirm,
  onCancel,
}: ConfirmCloseWashModalProps) {
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
        <Text style={styles.text}>Vill du verkligen avluta tvätten?</Text>
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
