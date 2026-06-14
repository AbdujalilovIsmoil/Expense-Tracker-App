import { DUMMY_EXPENSES_TYPES } from "@/types";
import { FlatList, Text } from "react-native";

const renderExpenseItem = ({ item }: { item: DUMMY_EXPENSES_TYPES }) => {
  return <Text>{item.description}</Text>;
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
