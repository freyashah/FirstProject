import { StyleSheet, View, Button } from "react-native"

const CustomModal = () => {
    return (
        <View style={styles.modal}>
            <View style={styles.body}>
                <Button title="close" />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(50,50,50,0.5)',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    body: {
        backgroundColor: '#fff',
        height: 300,
        width: 300,
        padding: 20,
        borderRadius: 20,
        justifyContent: "flex-end"
    }
})
export default CustomModal