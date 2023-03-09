import { Text, View, TextInput } from 'react-native';


export default function HomeScreen() {
    return (
      <View className="container p-10">
        
        <Text className="text-blue-500 mt-10 text-xl">Surf Forecast React Native App</Text>
        
        <TextInput 
          className="h-40" 
          placeholder='Search'
        />
        
      </View>
    );
  }