import {View , Text, StyleSheet} from 'react-native'
const Login = () =>{
    return(
        <View style={styles.container}>
            <Text>This is Login screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Login