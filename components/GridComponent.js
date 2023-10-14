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

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.wrapper}>
                <View style={{ flex: 2 }}><Text style={{ padding: 10 }}>Name</Text></View>
                <View style={{ flex: 1.5 }}><Text style={{ padding: 10 }}>Operations</Text></View></View>
            {data ? data.map((item, index) => <View style={styles.wrapper}>
                <View style={{ flex: 1 }}><Text style={{ padding: 10 }} key={index}>{item.name}</Text></View>
                <View style={{ flex: 1 }}><Button title='Update' /></View>
                <View style={{ flex: 1 }}><Button title='Delete' /></View></View>
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