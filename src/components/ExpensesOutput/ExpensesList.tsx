import { DUMMY_EXPENSES_TYPES, ExpensesTypes } from "@/types";
import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = ({ item }: { item: DUMMY_EXPENSES_TYPES }) => {
  return <ExpenseItem {...item} />;
};

const ExpensesList = ({ expenses }: { expenses: DUMMY_EXPENSES_TYPES[] }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(el) => el.id}
      renderItem={renderExpenseItem}
    />
  );
};

export default ExpensesList;
