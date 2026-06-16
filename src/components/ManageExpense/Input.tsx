import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps {
  label: string;
  textInputConfig: TextInputProps;
}

const Input = ({ label, textInputConfig }: Partial<InputProps>) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;
