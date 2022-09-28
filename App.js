import 'react-native-gesture-handler';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';
import React from 'react';

import Routes from './src/routes';
import AppLoading from "expo-app-loading";
export default function App() {

  const [ fontsLoaded ] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold
  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}

