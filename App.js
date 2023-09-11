import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import  FirstComponent  from './components/FirstComponent';

let age = 39;
var email = 'xyz@gmail.com';
const App = () => {
  const name = 'sima'
  return (
    <View style={styles.container}>
      <Text>Welcome to freya's app.Hii!!  from freya</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{email}</Text>
      <Text>{fruit()}</Text>
      <Text>{3 * 2}</Text>
      <Text>{age === 39 ? 'OldAge' : 'YoungAge'}</Text>
      <Button title="Press Here"></Button>
      <FirstComponent />
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
});
export default App;