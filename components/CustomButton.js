import { View, Button, StyleSheet } from "react-native"

const ExportButton = (props) => {
    return (
        <View style={styles.button}>
            <Button color='white' title={props.buttonTitle} onPress={() => props.buttonTitle === 'Clear Input' ? ClearInput() : ButtonPress("Button is pressed")}></Button>
        </View>
    )
}
function ButtonPress(val) {
    console.warn(val)
}
function ClearInput() {
    console.warn('clear')
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3492eb',
        borderRadius: 5,
        color: 'white'
    }
})
export default ExportButton