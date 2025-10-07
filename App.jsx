import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home";


const App = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white items-center justify-center">
          <StatusBar hidden={true} />

          

        </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
