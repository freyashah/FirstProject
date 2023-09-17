import { Component } from "react";
import { View, Text, Button } from "react-native"

class Student extends Component {
    greet() {
        console.warn('Class component button pressed');
    }
    render() {
        return (
            <View>
                <Text style={{ color: 'red' }}>This is Class component student</Text>
                <Button title='Class Press' onPress={this.greet}></Button>
            </View>
        )
    }
}

export default Student