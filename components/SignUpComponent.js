import { View, Text, StyleSheet } from "react-native"

const SignUp = () => {
    return (
        <View style={styles.tabstyle}>
            <Text>Signup</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    tabstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SignUp