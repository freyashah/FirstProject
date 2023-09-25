import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, SectionList, TouchableHighlight, Pressable, Platform } from 'react-native';
import FirstComponent from './components/FirstComponent';
import { useEffect, useState } from 'react';
import ExStyles from './css/MainCSS';
import CustomButton from './components/CustomButton';
import Student from './components/ClassComponent';
import RadioButton from './components/RadioButtion';

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
  }]
  const newemails = [{
    id: 1,
    text: 'freya@test.com'
  },
  {
    id: 2,
    text: 'dhruval@test.com'
  }]
  const studentreport = [
    {
      id: 1,
      name: 'freya',
      data: [
        {
          id: 1,
          subject: 'CS',
          marks: 20
        },
        {
          id: 2,
          subject: 'Engish',
          marks: 10
        }
      ]
    },
    {
      id: 2,
      name: 'dhruval',
      data: [
        {
          id: 1,
          subject: 'CS',
          marks: 10
        },
        {
          id: 2,
          subject: 'Engish',
          marks: 20
        }
      ]
    }
  ]
  function ChangeName() {
    SetName('FreyaDShah')
  }
  useEffect(() => {
    console.warn('Component Mounted')
  }, [])
  useEffect(() => {
    console.warn("state is updated")
  }, [GetName, GetPassword])
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.innerbox1}>
          <Text>Inner box 1</Text>
        </View>
        <View style={styles.innerbox2}>
          <Text style={styles.OSStyle}>
            {JSON.stringify(Platform)}
            {JSON.stringify(Platform.constants.reactNativeVersion.minor)}
          </Text>
          {
            Platform.OS == 'android' ? <Text style={{ backgroundColor: 'blue' }}>hiii {Platform.OS}</Text> :
              <Text style={{ backgroundColor: 'purple' }}>Hii {Platform.OS}</Text>
          }
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.innerbox21}>
          <TouchableHighlight>
            <Text style={styles.touchablebutton}>Touchable button</Text>
          </TouchableHighlight>
          <Pressable onPress={() => console.warn("button pressed")} onLongPress={() => console.warn("long pressed")}
            onPressIn={() => console.warn("press in")} onPressOut={() => console.warn("press out")}>
            <Text style={styles.pressableBtn}>Pressable button</Text>
          </Pressable>
          <RadioButton />
        </View>
        <Text>{Platform.OS}</Text>
      </View>
      <View style={styles.box3}>
        <Text style={[styles.textbox, ExStyles.textbox, { padding: 10, borderRadius: 10 }]}>{name}</Text>
        <Text>{fruit()}</Text>
        <Text>{3 * 2}</Text>
        <Text>{age === 39 ? 'OldAge' : 'YoungAge'}</Text>
        <Text> State Name : {GetName} </Text>
        <CustomButton buttonTitle="Press Here" />
        <Button title="Update Name" onPress={ChangeName}></Button>
        {
          GetName == 'Freya' ? <FirstComponent name={GetName} /> : null
        }

        <TextInput style={ExStyles.textinput} value={GetName} placeholder='Enter Your Name'
          onChangeText={(text) => SetName(text)} />
        <CustomButton buttonTitle="Clear Input" />
        <TextInput style={ExStyles.textinput} value={GetPassword} placeholder='Enter Password'
          onChangeText={(text) => Setpassword(text)}
          secureTextEntry={DisplayPassword} />
        <Button title='View Password' onPress={() => SetDisplayPassword(!DisplayPassword)}></Button>
        <Button title='Clear Password' onPress={() => Setpassword('')}></Button>
        <FlatList data={users} horizontal={true} renderItem={({ item }) => <Text style={styles.textbox}>{item.name}</Text>}
          keyExtractor={item => item.id} />
        <ScrollView>
          <View style={styles.grid}>{
            emails.map((item, index) => <Text key={index} style={styles.griditem}>{item.text}</Text>)
          }</View>
        </ScrollView>
        <FlatList data={newemails} horizontal={true} renderItem={({ item }) => <GridData itemlist={item} />}
          keyExtractor={item => item.id} />
        <SectionList horizontal={true} sections={studentreport} renderItem={({ item }) => <Text>{item.subject} - {item.marks} </Text>}
          renderSectionHeader={({ section: { name } }) => <Text>{name}</Text>} />
        <Student name={GetName} />
      </View>
    </View>
  );
}

const GridData = (props) => {
  return (
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
    // alignItems: 'center',
    // justifyContent: 'center',
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
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row'
  },
  box3: {
    flex: 1,
    backgroundColor: 'orange'
  },
  innerbox1: {
    flex: 1,
    backgroundColor: 'pink',
    margin: 10
  },
  innerbox2: {
    flex: 2,
    backgroundColor: 'red'
  },
  innerbox21: {
    flex: 2,
    backgroundColor: 'purple',
    justifyContent: 'center',
  },
  touchablebutton: {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 20,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'red',
    elevation: 3,
    shadowOpacity: 1,
    textAlign: 'center',
    overflow: 'hidden'
  },
  pressableBtn: {
    backgroundColor: 'skyblue',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    padding: 5,
    width: 200,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 5,
    overflow: 'hidden'
  },
  OSStyle: {
    color: Platform.OS == 'android' ? 'white' : 'blue'
  }
});
export default App;