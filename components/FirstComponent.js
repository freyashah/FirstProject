import { StyleSheet, View, Text } from 'react-native'
const FirstComponent = (params) => {
    return (
        <View style={{backgroundColor:'green',padding:5}}>
            <Text>
                This is component number 1
            </Text>
            <Text>Name:{params.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    componentstyle: {
        fontSize: 20,
        backgroundColor: 'blue',
        padding:40
    }
})

export default FirstComponent