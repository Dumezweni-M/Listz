import { Text, View, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Home = ({navigation}) => {
    return (

        <SafeAreaView className="flex-1 bg-blue-100 items-center justify-between p-2" >
                
                    {/* Navigation */}
                    <View className="flex flex-row justify-evenly w-full ">
                        <Pressable
                            className="bg-sky-500 p-3 rounded-lg mb-2"
                            onPress={() => navigation.navigate('Tasks')}
                            >
                            <Text className="text-white text-xl">Tasks</Text>
                        </Pressable>

                        <Pressable
                            className="bg-sky-500 p-3 rounded-lg mb-2"
                            onPress={() => navigation.navigate('Calendar')}
                            >
                            <Text className="text-white text-xl">Calendar</Text>
                        </Pressable>

                        <Pressable
                            className="bg-sky-500 p-3 rounded-lg mb-2"
                            onPress={() => navigation.navigate('Completed')}
                            >
                            <Text className="text-white text-xl">Completed</Text>
                        </Pressable>

                        <Pressable
                            className="bg-sky-500 p-3 rounded-lg mb-2"
                            onPress={() => navigation.navigate('Completed')}
                            >
                            <Text className="text-white text-xl">NotePad</Text>
                        </Pressable>

                        <Pressable
                            className="bg-sky-500 p-3 rounded-lg mb-2"
                            onPress={() => navigation.navigate('Completed')}
                            >
                            <Text className="text-white text-xl">Tracker</Text>
                        </Pressable>
                    </View>

                    {/* Main Content */}
                    <View className="flex flex-column justify-evenly">
                        <Text className="text-2xl">2. Implement Drawer</Text>
                        <Text className="text-2xl">3. Import Image Assets (Penpot)</Text>
                        <Text className="text-2xl">4. Create Splash Screen</Text>
                        <Text className="text-2xl">5. Create Home screen</Text>
                        <Text className="text-2xl">6. Consider saving template</Text>
                    </View>
                    

                    

        </SafeAreaView>
    )
}

export default Home;