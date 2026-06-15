import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

interface IconButtonTypes {
  size: number;
  onPress: () => void;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const IconButton = ({ icon, color, onPress, size }: IconButtonTypes) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} onPress={onPress} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 6,
    borderRadius: 24,
    marginVertical: 2,
    marginHorizontal: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
