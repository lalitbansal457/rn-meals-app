import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';

export default function App() {

  const [fontLoaded, setFontLoaded] = useState('');


 /* const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Ragular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
  }*/

  // if(!fontLoaded) {
  //   <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  // }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
