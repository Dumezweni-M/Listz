import { Text, View } from 'react-native'

const Home = () => {
    return (
        <View>
            <Text>Home Screen</Text>
                {/* Main Content */}
                <View className="border bg-white rounded-lg">
                  <Text className="text-4xl mb-8 border-b w-2/3">Tasks</Text>
                  <Text className="text-2xl">1. Create Safe Area</Text>
                  <Text className="text-2xl">2. Create Routes</Text>
                  <Text className="text-2xl">3. Import Image Assets (Penpot)</Text>
                  <Text className="text-2xl">4. Create Splash Screen</Text>
                  <Text className="text-2xl">5. Create Home screen</Text>
                  <Text className="text-2xl">6. Consider saving template</Text>
                </View>
        </View>
    )
}

export default Home;