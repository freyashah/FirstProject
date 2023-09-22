import { useState } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

const RadioButton = () => {
    const [selectedRadio, setSelectedRadio] = useState(1)
    return (
        <View>
            <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {
                            selectedRadio === 1 ? <View style={styles.radioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {
                            selectedRadio === 2 ? <View style={styles.radioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    radioText: {
        fontSize: 20
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    radioBg: {
        backgroundColor: 'skyblue',
        height: 28,
        width: 28,
        borderRadius: 20,
        margin: 4
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default RadioButton