import { useEffect, useState } from "react"
import { Button, ScrollView, View, Text, StyleSheet } from "react-native"

const Grid = () => {
    const [data, setData] = useState();

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

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.wrapper}>
                <View style={{ flex: 2 }}><Text style={{ padding: 10, textTransform: 'uppercase' }}>Name</Text></View>
                <View style={{ flex: 1.5 }}><Text style={{ padding: 10 }}>Operations</Text></View></View>
            {data ? data.map((item, index) => <View style={styles.wrapper}>
                <View style={{ flex: 1 }}><Text style={{ padding: 10, textAlign: "center" }} key={index}>{item.name}</Text></View>
                <View style={{ flex: 1 }}><Button title='Update' /></View>
                <View style={{ flex: 1 }}><Button title='Delete' onPress={() => DeleteData(item.id)} /></View></View>
            )
                : null}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 5,
        backgroundColor: 'orange'
    }
})
export default Grid