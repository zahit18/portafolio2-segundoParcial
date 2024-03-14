import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokeStart from './components/PokeStart';
import TablaEjemplo from './components/TablaEjemplo';
import Navigation from './Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TablaEjemplo/> */}
      <Navigation />
      {/* <PokeStart/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
