import IconButton from "@/components/UI/IconButton";
import { GlobalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={({ route }) => ({
          headerTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerRight: ({ tintColor }) => {
            console.log("route", route);
            return (
              <IconButton
                size={24}
                icon="add"
                color={String(tintColor)}
                onPress={() => router.push("/manage-expense")}
              />
            );
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Recent",
            title: "Recent Expenses",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="hourglass" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="all-expenses"
          options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="calendar" size={size} color={color} />;
            },
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default Layout;
