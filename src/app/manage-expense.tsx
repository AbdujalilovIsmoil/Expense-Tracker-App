import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

  return (
    <SafeAreaView>
      <Text>Manage Expense</Text>
    </SafeAreaView>
  );
};

export default ManageExpense;
