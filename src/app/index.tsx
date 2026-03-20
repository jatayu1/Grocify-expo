import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";     

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen. 12345</Text>
      <Image
        source={require("../../assets/images/icon.png")} 
        style={{ width: 100, height: 100, borderRadius: 20, marginTop: 20}}
        />
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
