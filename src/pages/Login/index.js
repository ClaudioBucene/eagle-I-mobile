import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { TextInput} from 'react-native-paper';
import colors from '../styles/colors';
import styles from './styles';

import Logo from '../../../assets/logo.svg'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Login() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>

       <Logo />
       
        <Text style={styles.firstTxt}>Acesse a sua conta</Text>
        
      <View style={styles.uinputView}>
      <TextInput style={styles.txtInput} selectionColor='#12375C' outlineColor='#12375C'
        activeOutlineColor='#12375C' underlineColor='#12375C' 

      left={<TextInput.Icon icon="account-outline"/>} 
      
       mode="outlined" label="Username" />
      </View>
      
      <View style={styles.pinputView}>
      <TextInput style={styles.txtInput} selectionColor='#12375C' outlineColor='#12375C'
        activeOutlineColor='#12375C' left={<TextInput.Icon icon="key-outline" />}
       mode="outlined" secureTextEntry={true} label="Password"/>
      </View>
      
    
      <TouchableOpacity style={styles.BtnView} onPress={() => navigation.navigate('Menu')}>
      <MaterialCommunityIcons name="login" size={15} color="#A1C861"/>
       <Text style={styles.BtnText}>Entrar</Text>
      </TouchableOpacity> 
     

    </View>
  );
}