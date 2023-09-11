import { StyleSheet, View, Text } from 'react-native'
const FirstComponent = () => {
    return (
        <View styles={styles.component}>
            <Text>
                This is component number 1
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        fontSize: 20,
        backgroundColor: 'blue'
    }
})

export default FirstComponent