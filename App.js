import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import FirstComponent from './components/FirstComponent';
import { useState } from 'react';
import ExStyles from './css/MainCSS';
import CustomButton from './components/CustomButton';

let age = 39;
var email = 'xyz@gmail.com';
const App = () => {
  const name = 'sima'
  const [GetName, SetName] = useState('Freya');
  const [GetPassword, Setpassword] = useState('');
  const [DisplayPassword, SetDisplayPassword] = useState(true);
  const users = [{
    id: 1,
    name: 'freya'
  },
  {
    id: 2,
    name: 'dhruval'
  }]
  const emails = [{
    id: 1,
    text: 'freya@test.com'
  },
  {
    id: 2,
    text: 'dhruval@test.com'
  },]
  function ChangeName() {
    SetName('FreyaDShah')
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.textbox, ExStyles.textbox, { padding: 10, borderRadius: 10 }]}>{name}</Text>
      <Text>{fruit()}</Text>
      <Text>{3 * 2}</Text>
      <Text>{age === 39 ? 'OldAge' : 'YoungAge'}</Text>
      <Text> State Name : {GetName} </Text>
      <CustomButton buttonTitle="Press Here" />
      <Button title="Update Name" onPress={ChangeName}></Button>
      <FirstComponent name={GetName} />
      <TextInput style={ExStyles.textinput} value={GetName} placeholder='Enter Your Name'
        onChangeText={(text) => SetName(text)} />
      <CustomButton buttonTitle="Clear Input" />
      <TextInput style={ExStyles.textinput} value={GetPassword} placeholder='Enter Password'
        onChangeText={(text) => Setpassword(text)}
        secureTextEntry={DisplayPassword} />
      <Button title='View Password' onPress={() => SetDisplayPassword(!DisplayPassword)}></Button>
      <Button title='Clear Password' onPress={() => Setpassword('')}></Button>
      <FlatList data={users} renderItem={({ item }) => <Text style={styles.textbox}>{item.name}</Text>}
        keyExtractor={item => item.id} />
      <ScrollView>{
        emails.map((item) => <Text>{item.text}</Text>)
      }</ScrollView>
    </View>
  );
}



function fruit() {
  return 'apple';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    borderColor: 'red',
    borderWidth: 5
  },
});
export default App;