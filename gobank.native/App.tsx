import { StyleSheet, View, StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
