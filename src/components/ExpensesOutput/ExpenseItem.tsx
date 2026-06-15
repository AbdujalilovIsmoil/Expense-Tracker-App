import { GlobalStyles } from "@/constants/styles";
import { DUMMY_EXPENSES_TYPES } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

type EXPENSE_ITEM_TYPES = Omit<DUMMY_EXPENSES_TYPES, "id">;

const ExpenseItem = ({ amount, date, description }: EXPENSE_ITEM_TYPES) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    elevation: 3,
    borderRadius: 6,
    shadowRadius: 4,
    marginVertical: 8,
    shadowOpacity: 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: GlobalStyles.colors.gray500,
    backgroundColor: GlobalStyles.colors.primary500,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingVertical: 4,
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: "white",
  },
  amount: {
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
