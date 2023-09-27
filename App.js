import { View, Text, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Example from "../FirstProject/components/ExampleScreen"
import Login from "../FirstProject/components/LoginComponent"
import HeaderComponent from "./components/HeaderComponent"

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'skyblue'
        },
        headerTitleStyle: {
          fontSize: 20
        },
        headerTintColor: 'white'
      }}>
        <Stack.Screen name="Example Screen" component={Example} options={({ navigation }) => ({
          title: "Syntax Screen",
          headerStyle: {
            backgroundColor: 'purple'
          },
          headerTitleStyle: {
            fontSize: 20
          },
          headerTintColor: 'white',
          headerLeft: () => <Button color="white" title="#" onPress={() => navigation.navigate('Login')} />,
          headerRight: () => <HeaderComponent />
        })} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App