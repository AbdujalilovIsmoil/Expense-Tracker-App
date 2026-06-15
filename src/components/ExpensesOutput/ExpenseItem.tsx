import { GlobalStyles } from "@/constants/styles";
import { DUMMY_EXPENSES_TYPES } from "@/types";
import { getFormattedDate } from "@/utility/date";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ExpenseItem = ({
  id,
  date,
  amount,
  description,
}: DUMMY_EXPENSES_TYPES) => {
  const router = useRouter();

  const expensePressHandler = () => {
    router.push({
      pathname: "/manage-expense",
      params: {
        id,
      },
    });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
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
    minWidth: 80,
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
