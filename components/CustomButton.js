import { useState } from "react"
import { View, Button, StyleSheet, ActivityIndicator, Modal, Text } from "react-native"

const ExportButton = (props) => {
    const [show, setShow] = useState(false);
    function ButtonPress(val) {
        console.warn(val)
        setShow(true)
        setTimeout(() => {
            setShow(false);
        }, 3000)
    }
    return (
        <View>
            <ActivityIndicator size={'large'} color='black' animating={show} />
            <Modal transparent={true} visible={!show} animationType="slide">
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.closeButton}>
                            <Button title='X' onPress={() => setShow(true)}></Button>
                        </View>
                        <Text style={styles.textStyle}>Hello this is modal</Text>
                        <Button title="Close Modal" onPress={() => setShow(true)}></Button>
                    </View>
                </View>
            </Modal>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 20,
        shadowOpacity: 1,
        width: 300
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    closeButton: {
        textAlign: 'right',
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'flex-end',
        shadowColor: 'blue',
        elevation: 20,
        shadowOpacity: 0.5
    }
})
export default ExportButton