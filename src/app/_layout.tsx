import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="manage-expense"
        options={{
          headerShown: true,
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
};

export default Layout;
