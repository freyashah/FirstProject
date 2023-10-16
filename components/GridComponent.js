import { useEffect, useState } from "react"
import { Button, ScrollView, View, Text, StyleSheet, Modal } from "react-native"

const Grid = () => {
    const [data, setData] = useState();
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(undefined)

    useEffect(() => {
        GetData();
    }, [])

    const GetData = async () => {
        const url = 'http://192.168.29.140:3000/users';
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        }
    }

    const DeleteData = async (id) => {
        const url = 'http://192.168.29.140:3000/users';
        let result = await fetch(`${url}/${id}`, {
            method: "delete"
        })
        result = await result.json();
        if (result) {
            GetData();
        }
    }

    const UpdateData = (data) => {
        setShowModal(true)
        setSelectedData(data)
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.wrapper}>
                <View style={{ flex: 2 }}><Text style={{ padding: 10, textTransform: 'uppercase' }}>Name</Text></View>
                <View style={{ flex: 1.5 }}><Text style={{ padding: 10 }}>Operations</Text></View></View>
            {data ? data.map((item, index) => <View style={styles.wrapper}>
                <View style={{ flex: 1 }}><Text style={{ padding: 10, textAlign: "center" }} key={index}>{item.name}</Text></View>
                <View style={{ flex: 1 }}><Button title='Update' onPress={() => UpdateData(item)} /></View>
                <View style={{ flex: 1 }}><Button title='Delete' onPress={() => DeleteData(item.id)} /></View></View>
            )
                : null}
            <Modal transparent={true} visible={showModal}>
                <ModalComponent setShowModal={setShowModal} selectedData={selectedData} />
            </Modal>
        </ScrollView>
    )
}
const ModalComponent = (props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.modalView}>
                <Text>{props.selectedData.name}</Text>
                <Button title="Close" onPress={() => props.setShowModal(false)} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 5,
        backgroundColor: 'orange'
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 60,
        borderRadius: 10,
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        alignItems: 'center'
    }
})
export default Grid