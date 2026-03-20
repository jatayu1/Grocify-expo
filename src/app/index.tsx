import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";     

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-4xl bg-purple-500">Edit src/app/index.tsx to edit this screen. 12345</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
