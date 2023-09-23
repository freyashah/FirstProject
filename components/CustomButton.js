import { useState } from "react"
import { View, Button, StyleSheet, ActivityIndicator } from "react-native"

const ExportButton = (props) => {
    const [show, setShow] = useState(false);
    function ButtonPress(val) {
        console.warn(val)
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }
    return (
        <View>
            <ActivityIndicator size={'large'} color='black' animating={show} />
            <View style={styles.button}>
                <Button color='white' title={props.buttonTitle} onPress={() => props.buttonTitle === 'Clear Input' ? ClearInput() : ButtonPress("Button is pressed")}></Button>
            </View>
        </View>
    )
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