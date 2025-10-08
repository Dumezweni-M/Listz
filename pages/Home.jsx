import { Text, View, Pressable, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'




const Home = ({navigation}) => {
    return (

        <SafeAreaView className="flex-1 items-center justify-between px-4" >


                    {/* Header */}
                    <View>
                        <Text className="text-3xl font-bold text-gray-400 mb-4">Wednesday - 08 Oct</Text>
                    </View>

                    <View className="border border-gray-400 w-full rounded-2xl mb-4 flex flex-row justify-between items-center px-4">
                        <TextInput className="" placeholder='Search your collections'></TextInput>
                        <Ionicons name="search" size={24} color="gray"/>
                    </View>
                    
                
                    {/* Navigation */}
                    <View className="flex justify-evenly w-full">
                        <Pressable
                            className="border border-gray-200 p-3 rounded-lg h-1/6 items-center flex-row shadow-sm bg-white"
                            onPress={() => navigation.navigate('Tasks')}
                            >
                            <Ionicons name="list-outline" size={24} color="black" className="pr-6"/>
                            <Text className=" text-2xl">View List</Text>
                        </Pressable>

                        <Pressable
                            className="border border-gray-200 p-3 rounded-lg h-1/6 items-center flex-row shadow-sm bg-white"
                            onPress={() => navigation.navigate('Calendar')}
                            >
                            <Ionicons name="calendar-outline" size={24} color="black" className="pr-6"/>
                            <Text className="text-2xl">Calendar</Text>
                        </Pressable>


                        <Pressable
                            className="border  border-gray-200 p-3 rounded-lg h-1/6 items-center flex-row shadow-sm bg-white"
                            onPress={() => navigation.navigate('Completed')}
                            >
                            <Ionicons name="document-outline" size={24} color="black" className="pr-6"/>
                            <Text className="text-2xl">NotePad</Text>
                        </Pressable>

                        <Pressable
                            className="border border-gray-200 p-3 rounded-lg h-1/6 items-center flex-row shadow-sm bg-white"
                            onPress={() => navigation.navigate('Completed')}
                            >
                            <Ionicons name="checkmark-circle-outline" size={24} color="black" className="pr-6"/>
                            <Text className="text-2xl">Completed</Text>
                        </Pressable>
                    </View>


                    
                    {/* Add Task Button */}
                    <Pressable className="rounded-full p-2 bg-black/70">
                        <Ionicons name="add" size={44} color="white"/>
                    </Pressable>

        </SafeAreaView>
    )
}

export default Home;