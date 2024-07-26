import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginPage from "./app/Pages/LoginPage"
import HomePage from "./app/Pages/HomePage";
import Home from "./app/Pages/Home";


function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Dashboard" component={HomePage} />
        </Stack.Navigator>

      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff ',
    paddingTop: Platform.OS ==="android"? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#208220',
  }
});
