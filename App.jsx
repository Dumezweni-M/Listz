import "./global.css";
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Calendar from "./pages/Calendar";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          {/* Home Screen */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: true }}
          />

          {/* Tasks Screen */}
          <Stack.Screen
            name="Tasks"
            component={Tasks}
          />

          {/* Calendar View */}
          <Stack.Screen
            name="Calendar"
            component={Calendar}
          />

        </Stack.Navigator>



      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
