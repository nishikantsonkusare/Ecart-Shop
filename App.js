import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
// Screens Import
import Home from "./screens/Home";
import NewRecord from "./screens/NewRecord";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#3c020f",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="NewRecord"
              component={NewRecord}
              options={{ title: "Add New Record" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
