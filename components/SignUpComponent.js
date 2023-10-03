import { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native"


const SignUp = () => {
    const [data, setData] = useState(undefined);

    const getAPIMethod = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getAPIMethod();
    }, [])

    return (
        <View style={styles.tabstyle}>
            <Text>Signup</Text>
            {
                data ? <ScrollView>
                    <View>{
                        data.map((item, index) => <Text key={index}>{item.title}</Text>)
                    }</View>
                    <View>
                        <FlatList data={data} horizontal={true} renderItem={({ item }) => <Text> Id : {item.id}</Text>}
                            keyExtractor={item => item.id} />
                    </View>
                </ScrollView>
                    : null
            }

        </View>
    )
}
const styles = StyleSheet.create({
    tabstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SignUp