import { useRouter } from "expo-router";
import { Button, StatusBar, Text, View } from "react-native";

const index = () => {
  const router = useRouter();

  return (
    <View>
      <Button
        title="All Expenses"
        onPress={() => router.push("/all-expenses")}
      />
      <Text>Hello World</Text>

      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};

export default index;
