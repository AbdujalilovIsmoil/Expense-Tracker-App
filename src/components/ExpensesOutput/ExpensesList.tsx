import { FlatList, View } from "react-native";

const ExpensesList = () => {
  return (
    <FlatList
      data={[]}
      renderItem={() => {
        return <View></View>;
      }}
    />
  );
};

export default ExpensesList;
