import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import FirstComponent from './components/FirstComponent';
import { useState } from 'react';
import ExStyles from './css/MainCSS';

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
      <Text style = {[styles.textbox,ExStyles.textbox,{padding:10,borderRadius:10}]}>{name}</Text>
      <Text>{age}</Text>
      <Text>{email}</Text>
      <Text>{fruit()}</Text>
      <Text>{3 * 2}</Text>
      <Text>{age === 39 ? 'OldAge' : 'YoungAge'}</Text>
      <Text> State Name : {GetName} </Text>
      <Button title="Press Here" onPress={() => ButtonPress("Button is pressed")}></Button>
      <Button title="Update Name" onPress={ChangeName}></Button>
      <FirstComponent name={GetName}/>
      <StatusBar style="auto" />
    </View>
  );
}

function ButtonPress(val) {
  console.warn(val)
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
  textbox:{
    borderColor:'red',
    borderWidth:5
  }
});
export default App;