import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


import Login from './pages/Login';
import Menu from './pages/Menu'

export default function Routes() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}} 
          initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}