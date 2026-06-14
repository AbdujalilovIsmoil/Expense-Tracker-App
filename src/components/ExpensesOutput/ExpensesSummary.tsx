import { ExpensesTypes } from "@/types";
import { Text, View } from "react-native";

interface ExpensesSummaryProps {
  periodName: string;
  expenses: ExpensesTypes[];
}

const ExpensesSummary = (props: ExpensesSummaryProps) => {
  const expenseSum = props?.expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{props.periodName}</Text>
      <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
