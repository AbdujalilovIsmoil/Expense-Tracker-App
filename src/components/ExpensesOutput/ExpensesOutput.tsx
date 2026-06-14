import { ExpensesTypes } from "@/types";
import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

interface ExtensesOutputProps {
  expensesPeriod: string;
  expenses: ExpensesTypes[];
}

const ExpensesOutput = ({ expenses, expensesPeriod }: ExtensesOutputProps) => {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />

      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
