import { DUMMY_EXPENSES_TYPES, InputValuesProps } from "@/types";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button";
import Input from "./Input";

type IndentifierTypes = "amount" | "date" | "description";

interface ExpenseFormProps {
  onCancel: () => void;
  submitButtonLabel: string;
  onSubmit: (values: Omit<DUMMY_EXPENSES_TYPES, "id">) => void;
}

const ExpenseForm = ({
  onSubmit,
  onCancel,
  submitButtonLabel,
}: ExpenseFormProps) => {
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

  const submitHandler = () => {
    const expenseData: InputValuesProps = {
      date: new Date(inputValues.date),
      amount: Number(inputValues.amount),
      description: inputValues.description,
    };

    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: String(inputValues.amount),
            onChangeText: (value) => inputChangeHandler("amount", value),
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            maxLength: 10,
            placeholder: "YYYY-MM-DD",
            value: String(inputValues.date),
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
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
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
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
