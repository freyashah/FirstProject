import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import FirstComponent from './components/FirstComponent';
import { useState } from 'react';
import ExStyles from './css/MainCSS';
import CustomButton from './components/CustomButton';

let age = 39;
var email = 'xyz@gmail.com';
const App = () => {
  const name = 'sima'
  const [GetName, SetName] = useState('Freya');
  function ChangeName() {
    SetName('FreyaDShah')
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to freya's app.Hii!!  from freya</Text>
      <Text style={[styles.textbox, ExStyles.textbox, { padding: 10, borderRadius: 10 }]}>{name}</Text>
      <Text>{age}</Text>
      <Text>{email}</Text>
      <Text>{fruit()}</Text>
      <Text>{3 * 2}</Text>
      <Text>{age === 39 ? 'OldAge' : 'YoungAge'}</Text>
      <Text> State Name : {GetName} </Text>
      <CustomButton buttonTitle="Press Here" />
      <Button title="Update Name" onPress={ChangeName}></Button>
      <FirstComponent name={GetName} />
      <TextInput style={ExStyles.textinput} value={GetName} placeholder='Enter Your Name' onChangeText={(text) => SetName(text)} />
      <CustomButton buttonTitle="Clear Input" />
      <StatusBar style="auto" />
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