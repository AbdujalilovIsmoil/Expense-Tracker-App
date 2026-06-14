import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AllExpenses = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Button title="Back" onPress={() => router.push("/")} />

      <Text>All Expenses</Text>
    </SafeAreaView>
  );
};

export default AllExpenses;
