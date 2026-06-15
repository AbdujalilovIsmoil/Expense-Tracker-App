import { GlobalStyles } from "@/constants/styles";
import ExpensesContextProvider from "@/store/expenses-context";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <ExpensesContextProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
        }}
      >
        <Stack.Screen
          name="manage-expense"
          options={{
            headerShown: true,
            presentation: "modal",
            title: "Manage Expense",
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </ExpensesContextProvider>
  );
};

export default Layout;
