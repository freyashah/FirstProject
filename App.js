import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to freya's app.Hii!!  from freya</Text>
      <Button title="Press Here"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;