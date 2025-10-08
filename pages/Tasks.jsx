import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TextInput, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Tasks = ({navigation}) => {
    return (
            <SafeAreaView className="flex-1 items-center justify-between px-4">
                    {/* Header */}
                    <View>
                        <Text className="text-3xl font-bold text-gray-400 mb-4">Wednesday - 08 Oct</Text>
                    </View>

                    <View className="border border-gray-400 w-full rounded-2xl mb-4 flex flex-row justify-between items-center px-4">
                        <TextInput className="" placeholder='Search your collections'></TextInput>
                        <Ionicons name="search" size={24} color="gray"/>
                    </View>


                {/* Main Content */}
                    <View className="flex flex-column justify-evenly">
                        <Text className="text-2xl">2. Implement Drawer</Text>
                        <Text className="text-2xl">3. Import Image Assets (Penpot)</Text>
                        <Text className="text-2xl">4. Create Splash Screen</Text>
                        <Text className="text-2xl">5. Create Home screen</Text>
                        <Text className="text-2xl">6. Consider saving template</Text>
                        <Text className="text-2xl">6. Add custom colours</Text>
                    </View>

                    {/* Add Task Button */}
                    <Pressable className="rounded-full p-2 bg-black/70">
                        <Ionicons name="add" size={44} color="white"/>
                    </Pressable>


            </SafeAreaView>
    )
}

export default Tasks;