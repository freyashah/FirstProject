import { Component } from "react";
import { View, Text, Button, TextInput } from "react-native"

class Student extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: null
        }
    }
    greet() {
        console.warn('Class component button pressed');
    }
    UpdateState(text) {
        this.setState({ name: text });
    }
    render() {
        console.warn(this.props)
        return (
            <View>
                <Text style={{ color: 'red' }}>This is Class component student - {this.state.name}</Text>
                <Button title='Class Press' onPress={this.greet}></Button>
                <TextInput value={this.state.name} onChangeText={(text) => this.UpdateState(text)} placeholder="enter" />
            </View>
        )
    }
}

export default Student