import ExpenseForm from "@/components/ManageExpense/ExpenseForm";
import IconButton from "@/components/UI/IconButton";
import { GlobalStyles } from "@/constants/styles";
import { ExpensesContext } from "@/store/expenses-context";
import { DUMMY_EXPENSES_TYPES } from "@/types";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

const ManageExpense = () => {
  const expenseCtx = useContext(ExpensesContext);
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const isEditing = !!id;

  const selectedExpense = expenseCtx.expenses.find((expense) => {
    return expense.id === id;
  });

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

  const confirmHandler = (expenseData: Omit<DUMMY_EXPENSES_TYPES, "id">) => {
    if (isEditing) {
      expenseCtx.updateExpense(String(id), expenseData);
    } else {
      expenseCtx.addExpense(expenseData);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
        submitButtonLabel={isEditing ? "Update" : "Add"}
      />
      {/* buttons */}
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
    borderTopColor: GlobalStyles.colors.primary200,
  },
});
