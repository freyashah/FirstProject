import { View, Text, StyleSheet, Button } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import SignUp from './SignUpComponent'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Example from './ExampleScreen'
import { useEffect } from 'react'

const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()
const Login = (props) => {
    const { name, otherName } = props.route.params
    const APIdata = {
        "name": otherName
    }
    useEffect(() => {
        GetCustomAPIData();
    }, [])
    const GetCustomAPIData = async () => {
        const url = 'http://192.168.29.140:3000/users'
        let result = await fetch(url);
        result = await result.json();
        console.warn(result)
    }
    const PostAPI = async () => {
        console.warn(APIdata)
        const url = 'http://192.168.29.140:3000/users'
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(APIdata)
        })
        result = await result.json();
        console.warn(result)
    }
    return (
        <View style={styles.container}>
            <Text>This is Login screen</Text>
            <Text>Name:{name}</Text>
            <Text>Other Name: {otherName}</Text>
            <Button title='Pass Data To API' onPress={PostAPI} />
            <NavigationContainer independent={true}>
                <Tab.Navigator>
                    <Tab.Screen name='SignUp' component={SignUp} />
                    <Tab.Screen name='Nested' component={Nested} />
                </Tab.Navigator>

            </NavigationContainer>
        </View>

    )
}
const Nested = () => {
    return (
        <NavigationContainer independent={true}>
            <TopTab.Navigator>
                <TopTab.Screen name='Top Signup' component={SignUp} />
                <TopTab.Screen name='Top Example' component={Example} />
            </TopTab.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default Login