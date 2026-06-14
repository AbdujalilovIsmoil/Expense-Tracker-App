import { GlobalStyles } from "@/constants/styles";
import { ExpensesTypes } from "@/types";
import { StyleSheet, Text, View } from "react-native";

interface ExpensesSummaryProps {
  periodName: string;
  expenses: ExpensesTypes[];
}

const ExpensesSummary = (props: ExpensesSummaryProps) => {
  const expenseSum = props?.expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{props.periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.primary50,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
