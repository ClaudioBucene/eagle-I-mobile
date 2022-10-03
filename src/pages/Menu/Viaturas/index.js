import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Logo from '../../../../assets/logo.svg'
import ProfilePic from '../../../../assets/foto.svg'

import styles from './styles'

export default function Viaturas() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>

        <View style={styles.view1}>
        </View>

        <View style={styles.view2}>
          <Logo />
          <ProfilePic />
        </View>

        <View style={styles.view3}>
        </View>

        <View style={styles.view4}>
          <TouchableOpacity style={styles.menuButtonsUp} onPress={() => navigation.navigate('./Transfers')}>
          <Ionicons name="arrow-back-outline" size={24} color="#12375C" />
          <Ionicons name="car-outline" size={40} color="#12375C" />
          <Ionicons name="arrow-forward" size={24} color="#12375C" />
            <Text >Transferências</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.menuButtonsUp} onPress={() => navigation.navigate('./Vehicles')}>
          <Ionicons name="car-outline" size={40} color="#12375C" />
          <Text >Viaturas</Text>
          </TouchableOpacity>
        </View>
      
       <View style={styles.view5}>
        <TouchableOpacity  style={styles.menuButtonsDown} onPress={() => navigation.navigate('./Atrelado')}>
        <FontAwesome5 name="trailer" size={40} color="#12375C" />
          <Text >Atrelado</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.menuButtonsDown} onPress={() => navigation.navigate('./Inspeccao')}>
        <MaterialCommunityIcons name="magnify" size={40} color="#12375C" />
          <Text >Inspecção diária</Text>
        </TouchableOpacity>
       </View>

      </View>   
  )}