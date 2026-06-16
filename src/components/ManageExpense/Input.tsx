import { GlobalStyles } from "@/constants/styles";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

interface InputProps {
  label: string;
  style: ViewStyle;
  inValid: boolean;
  textInputConfig: TextInputProps;
}

const Input = ({
  label,
  style,
  inValid,
  textInputConfig,
}: Partial<InputProps>) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          inValid && styles.invalidInput,
          textInputConfig?.multiline && styles.inputMultiline,
        ]}
        {...textInputConfig}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: GlobalStyles.colors.primary100,
  },
  input: {
    padding: 6,
    fontSize: 18,
    borderRadius: 6,
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
