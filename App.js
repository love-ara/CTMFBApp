import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Button, SafeAreaView, Platform} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage";
export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Log in" component={LoginPage} />
          <Stack.Screen name="Home" component={HomePage} />
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
