import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Vehicles from './Vehicles';
import Atrelado from './Atrelado';
import Inspeccao from './Inspeccao';
import Transfers from './Transfers';

const Stack = createStackNavigator();

import styles from './styles'

export default function MyStack() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator  screenOptions={{headerShown: false}} 
          initialRouteName='Viaturas'>
        <Stack.Screen name="Viaturas" component={Viaturas} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Inspeccao" component={Inspeccao} />
        <Stack.Screen name="Atrelado" component={Atrelado} />
        <Stack.Screen name="Transfers" component={Transfers} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

 function Viaturas() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>

        <View style={styles.view3}>

        </View>

        <View style={styles.view4}>
          <TouchableOpacity style={styles.menuButtonsUp} onPress={() => navigation.navigate('Transfers')}>
          <Ionicons name="arrow-back-outline" size={24} color="#12375C" />
          <Ionicons name="car-outline" size={40} color="#12375C" />
          <Ionicons name="arrow-forward" size={24} color="#12375C" />
            <Text >TransferĂȘncias</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.menuButtonsUp} onPress={() => navigation.navigate('Vehicles')}>
          <Ionicons name="car-outline" size={40} color="#12375C" />
          <Text >Viaturas</Text>
          </TouchableOpacity>
        </View>
      
       <View style={styles.view5}>
        <TouchableOpacity  style={styles.menuButtonsDown} onPress={() => navigation.navigate('Atrelado')}>
        <FontAwesome5 name="trailer" size={40} color="#12375C" />
          <Text >Atrelado</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.menuButtonsDown} onPress={() => navigation.navigate('Inspeccao')}>
        <MaterialCommunityIcons name="magnify" size={40} color="#12375C" />
          <Text >InspecĂ§ĂŁo diĂĄria</Text>
        </TouchableOpacity>
       </View>

      </View>   
  )}