import { GlobalStyles } from "@/constants/styles";
import { DUMMY_EXPENSES_TYPES } from "@/types";
import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

interface ExtensesOutputProps {
  expensesPeriod: string;
  expenses: DUMMY_EXPENSES_TYPES[];
}

const ExpensesOutput = ({ expenses, expensesPeriod }: ExtensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />

      <ExpensesList expenses={expenses} />
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
});
