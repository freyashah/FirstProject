import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import SignUp from './SignUpComponent'

const Tab = createBottomTabNavigator()
const Login = (props) => {
    const { name, otherName } = props.route.params
    return (
        <View style={styles.container}>
            <Text>This is Login screen</Text>
            <Text>Name:{name}</Text>
            <Text>Other Name: {otherName}</Text>
            <NavigationContainer independent={true}>
                <Tab.Navigator>
                    <Tab.Screen name='SignUp' component={SignUp} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default Login