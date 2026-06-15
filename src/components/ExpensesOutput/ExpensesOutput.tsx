import { GlobalStyles } from "@/constants/styles";
import { DUMMY_EXPENSES_TYPES } from "@/types";
import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

interface ExtensesOutputProps {
  expensesPeriod: string;
}

const DUMMY_EXPENSES: DUMMY_EXPENSES_TYPES[] = [
  {
    id: "e1",
    amount: 59.99,
    date: new Date("2021-12-19"),
    description: "A pair of shoes",
  },
  {
    id: "e2",
    amount: 89.99,
    date: new Date("2022-01-05"),
    description: "A pair of trousers",
  },
  {
    id: "e3",
    amount: 5.99,
    description: "Soma bananas",
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    amount: 14.99,
    description: "A book",
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    amount: 18.99,
    description: "Another book",
    date: new Date("2022-02-18"),
  },
   {
    id: "e6",
    amount: 59.99,
    date: new Date("2021-12-19"),
    description: "A pair of shoes",
  },
  {
    id: "e7",
    amount: 89.99,
    date: new Date("2022-01-05"),
    description: "A pair of trousers",
  },
  {
    id: "e8",
    amount: 5.99,
    description: "Soma bananas",
    date: new Date("2021-12-01"),
  },
  {
    id: "e9",
    amount: 14.99,
    description: "A book",
    date: new Date("2022-02-19"),
  },
  {
    id: "e10",
    amount: 18.99,
    description: "Another book",
    date: new Date("2022-02-18"),
  },
];

const ExpensesOutput = ({ expensesPeriod }: ExtensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />

      <ExpensesList expenses={DUMMY_EXPENSES} />
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
