import { GlobalStyles } from "@/constants/styles";
import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

interface ButtonProps {
  mode: "flat";
  style: ViewStyle;
  onPress: () => void;
  children: React.ReactNode;
}

const Button = ({ children, mode, style, onPress }: Partial<ButtonProps>) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
