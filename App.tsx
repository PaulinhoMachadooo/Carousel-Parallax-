import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, } from 'react-native';
import AppCarousel from './components/AppCarousel';
import Parallax from './components/Parallax';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppCarousel /> */}
      <Parallax />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
