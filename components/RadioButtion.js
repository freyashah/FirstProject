import { useState } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

const RadioButton = () => {
    const [selectedRadio, setSelectedRadio] = useState(1)
    const [selectedDynamicRadio, setSelectedDynamicRadio] = useState(1)
    const skills = [
        {
            id: 1,
            name: 'C#'
        },
        {
            id: 2,
            name: 'ReactNative'
        },
        {
            id: 3,
            name: 'SQL'
        }
    ]
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
            {
                skills.map((item, index) =>
                    <TouchableOpacity key={index} onPress={() => setSelectedDynamicRadio(item.id)}>
                        <View style={styles.radioWrapper}>
                            <View style={styles.radio}>
                                {
                                    selectedDynamicRadio === item.id ? <View style={styles.radioBg}></View> : null
                                }
                            </View>
                            <Text style={styles.radioText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    radioText: {
        fontSize: 10
    },
    radio: {
        height: 20,
        width: 20,
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 20,
        margin: 5
    },
    radioBg: {
        backgroundColor: 'skyblue',
        height: 12,
        width: 12,
        borderRadius: 5,
        margin: 2
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default RadioButton