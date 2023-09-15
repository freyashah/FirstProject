import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, SectionList } from 'react-native';
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
  const studentreport = [
    {
      id:1,
      name:'freya',
      data:[
        {
          id:1,
          subject:'CS',
          marks:20
        },
        {
          id:2,
          subject:'Engish',
          marks:10
        }
      ]
    },
    {
      id:2,
      name:'dhruval',
      data:[
        {
          id:1,
          subject:'CS',
          marks:10
        },
        {
          id:2,
          subject:'Engish',
          marks:20
        }
      ]
    }
  ]
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
      <ScrollView>
        <View style={styles.grid}>{
          emails.map((item) => <Text style={styles.griditem}>{item.text}</Text>)
        }</View>
      </ScrollView>
      <FlatList data={emails} renderItem={({ item }) => <GridData itemlist = {item}/>}
        keyExtractor={item => item.id} />
        <SectionList sections={studentreport} renderItem={({item}) => <Text>{item.subject} - {item.marks} </Text>} 
        renderSectionHeader={({section:{name}}) => <Text>{name}</Text>}/>
    </View>
  );
}

const GridData = (props) =>{
  return(
    <View style={styles.grid}>
<Text style={styles.griditem}>{props.itemlist.text}</Text>
    </View>
  )
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  griditem: {
    margin: 5,
    padding: 5,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});
export default App;