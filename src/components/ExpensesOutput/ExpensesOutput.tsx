import { GlobalStyles } from "@/constants/styles";
import { DUMMY_EXPENSES_TYPES } from "@/types";
import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

interface ExtensesOutputProps {
  fallbackText: string;
  expensesPeriod: string;
  expenses: DUMMY_EXPENSES_TYPES[];
}

const ExpensesOutput = ({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExtensesOutputProps) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />

      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 0,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    fontSize: 16,
    marginTop: 32,
    color: "white",
    textAlign: "center",
  },
});
