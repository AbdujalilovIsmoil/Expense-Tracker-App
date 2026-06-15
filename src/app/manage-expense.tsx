import IconButton from "@/components/UI/IconButton";
import { GlobalStyles } from "@/constants/styles";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

const ManageExpense = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const isEditing = !!id;

  console.log(id, "id");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {};

  return (
    <View style={styles.container}>
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
