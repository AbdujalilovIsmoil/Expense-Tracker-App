import { DUMMY_EXPENSES_TYPES, InputValuesProps } from "@/types";
import { getFormattedDate } from "@/utility/date";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button";
import Input from "./Input";

type IndentifierTypes = "amount" | "date" | "description";

interface ExpenseFormProps {
  onCancel: () => void;
  submitButtonLabel: string;
  defaultValues: DUMMY_EXPENSES_TYPES | undefined;
  onSubmit: (values: Omit<DUMMY_EXPENSES_TYPES, "id">) => void;
}

const ExpenseForm = ({
  onSubmit,
  onCancel,
  defaultValues,
  submitButtonLabel,
}: ExpenseFormProps) => {
  const [inputs, setInputs] = useState<InputValuesProps>({
    description: {
      isValid: true,
      value: defaultValues ? defaultValues.description : "",
    },
    amount: {
      isValid: true,
      value: defaultValues ? defaultValues.amount.toString() : "",
    },
    date: {
      isValid: true,
      value: defaultValues
        ? getFormattedDate(new Date(defaultValues.date))
        : "",
    },
  });

  const inputChangeHandler = (
    inputIndentifier: IndentifierTypes,
    enteredValue: string,
  ) => {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIndentifier]: {
          value: enteredValue,
          isValid: true,
        },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      date: new Date(inputs.date.value),
      amount: Number(inputs.amount.value),
      description: inputs.description.value,
    };

    const amountIsValid =
      !isNaN(Number(expenseData.amount)) && Number(expenseData.amount) > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert("Invalid input", "Please check your input values");

      setInputs((currentInputs) => {
        return {
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          description: {
            isValid: descriptionIsValid,
            value: currentInputs.description.value,
          },
        };
      });

      return;
    }

    onSubmit(expenseData);
  };

  const formIsInValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: String(inputs.amount.value),
            onChangeText: (value) => inputChangeHandler("amount", value),
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            maxLength: 10,
            placeholder: "YYYY-MM-DD",
            value: String(inputs.date.value),
            onChangeText: (value) => inputChangeHandler("date", value),
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          value: inputs.description.value,
          onChangeText: (value) => inputChangeHandler("description", value),
        }}
      />
      {formIsInValid && (
        <Text>Invalid input values - please check your entered data</Text>
      )}
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
