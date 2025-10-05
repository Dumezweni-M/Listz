import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View className="container flex-1 items-center justify-center border bg-sky-200">

      {/* Device vitals - Battery, Time, Network etc...*/}
      <StatusBar hidden={true} style="" />

      {/* Main Content */}
      <View className="border p-8 h-3/4 w-[90%] bg-white rounded-lg">
        <Text className="text-4xl mb-8 border-b w-2/3">Tasks</Text>
        <Text className="text-2xl">1. Create Safe Area</Text>
        <Text className="text-2xl">2. Create Routes</Text>
        <Text className="text-2xl">3. Import Image Assets (Penpot)</Text>
        <Text className="text-2xl">4. Create Splash Screen</Text>
        <Text className="text-2xl">5. Create Home screen</Text>
        <Text className="text-2xl">6. Consider saving template</Text>
      </View>

    </View>
  );
};

export default App;
