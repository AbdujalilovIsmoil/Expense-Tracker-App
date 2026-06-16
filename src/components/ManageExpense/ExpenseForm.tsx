import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

interface InputValuesProps {
  date: string;
  amount: string;
  description: string;
}

type IndentifierTypes = "amount" | "date" | "description";

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState<InputValuesProps>({
    date: "",
    amount: "",
    description: "",
  });

  const inputChangeHandler = (
    inputIndentifier: IndentifierTypes,
    enteredValue: string,
  ) => {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIndentifier]: enteredValue,
      };
    });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            value: inputValues.amount,
            keyboardType: "decimal-pad",
            onChangeText: (value) => inputChangeHandler("amount", value),
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            maxLength: 10,
            value: inputValues.date,
            placeholder: "YYYY-MM-DD",
            onChangeText: (value) => inputChangeHandler("date", value),
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          value: inputValues.description,
          onChangeText: (value) => inputChangeHandler("description", value),
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    color: "white",
    marginVertical: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
