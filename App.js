import { View,Text } from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Example from "../FirstProject/components/ExampleScreen"
import Login from "../FirstProject/components/LoginComponent"

const Stack = createNativeStackNavigator();
const App = () =>{
  return(
<NavigationContainer>
  <Stack.Navigator>
<Stack.Screen name="Example Screen" component={Example} />
<Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
</NavigationContainer>
  )
}
export default App