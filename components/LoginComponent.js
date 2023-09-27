import { View, Text, StyleSheet } from 'react-native'
const Login = (props) => {
    const { name, otherName } = props.route.params
    return (
        <View style={styles.container}>
            <Text>This is Login screen</Text>
            <Text>Name:{name}</Text>
            <Text>Other Name: {otherName}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Login