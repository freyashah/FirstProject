import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import SignUp from './SignUpComponent'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Example from './ExampleScreen'
import { useEffect, useState } from 'react'
import Grid from './GridComponent'

const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()
const Login = (props) => {
    const { name, otherName } = props.route.params
    const APIdata = {
        "name": otherName
    }
    const [age, setAge] = useState('');
    const [ageError, setAgeError] = useState(false);
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
        console.warn(age)
        setAgeError(!age ? true : false)
        if (!age) {
            return false;
        }
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
            <TextInput style={styles.textInput} placeholder='Enter Age' onChangeText={(text) => setAge(text)} value={age} />
            {ageError ? <Text style={styles.error}>Enter valid age</Text> : null}
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
                <TopTab.Screen name='Data' component={Grid} />
            </TopTab.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        borderColor: 'skyblue',
        borderStyle: 'solid',
        color: 'skyblue'
    },
    error: {
        color: 'red'
    }
})
export default Login