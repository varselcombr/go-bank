import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Routes from './src/routes';
import theme from './src/theme/theme';
import AppLoading from "expo-app-loading"

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import { ThemeProvider } from 'styled-components/native';

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  })

  if(!fontsLoaded){
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar animated />
          <Routes />
        </View>
      </ThemeProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
