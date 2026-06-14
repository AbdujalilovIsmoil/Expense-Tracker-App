import { FlatList, View } from "react-native";

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={() => {
        return <View></View>;
      }}
    />
  );
};

export default ExpensesList;
