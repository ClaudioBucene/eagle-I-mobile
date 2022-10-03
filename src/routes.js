import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './pages/Login';
import Menu from './pages/Menu';
import Vehicles from './pages/Menu/Viaturas/Vehicles';
import Atrelado from './pages/Menu/Viaturas/Atrelado';
import Inspeccao from './pages/Menu/Viaturas/Inspeccao';
import Transfers from './pages/Menu/Viaturas/Transfers';


export default function Routes() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}} 
          initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Inspeccao" component={Inspeccao} />
        <Stack.Screen name="Atrelado" component={Atrelado} />
        <Stack.Screen name="Transfers" component={Transfers} />
        </Stack.Navigator>

    </NavigationContainer> 
  );
}