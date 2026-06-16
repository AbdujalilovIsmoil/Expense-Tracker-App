import Button from "@/components/UI/Button";
import IconButton from "@/components/UI/IconButton";
import { GlobalStyles } from "@/constants/styles";
import { ExpensesContext } from "@/store/expenses-context";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

const ManageExpense = () => {
  const expenseCtx = useContext(ExpensesContext);
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
    expenseCtx.deleteExpense(String(id));
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expenseCtx.updateExpense(String(id), {
        amount: 20.0,
        date: new Date("2026-12-10"),
        description: "I'm a mobile engineer.",
      });
    } else {
      expenseCtx.addExpense({
        amount: 19.99,
        date: new Date("2026-12-01"),
        description: "This is a book.",
      });
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            size={36}
            icon="trash"
            onPress={deleteExpenseHandler}
            color={GlobalStyles.colors.error500}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
    borderTopColor: GlobalStyles.colors.primary200,
  },
});
