import { useNavigation } from '@react-navigation/native';
import * as Svg from 'react-native-svg';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { TextInput} from 'react-native-paper';
import colors from '../styles/colors';
import styles from './styles';

export default function Login() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>

        <Image source={require('../../../assets/eagleLogo.png')} />
       
        <Text style={styles.firstTxt}>Acesse a sua conta</Text>
        
      <View style={styles.uinputView}>
      <TextInput style={styles.txtInput} selectionColor='#12375C' outlineColor='#12375C'
        activeOutlineColor='#12375C' underlineColor='#12375C' 
      left={<TextInput.Icon icon="account-outline" theme={{colors: {text: colors.blue}}}/>} 
       mode="outlined" label="Username" theme={{ colors: {text: '#12375C !important'}}}/>
      </View>
      
      <View style={styles.pinputView}>
      <TextInput style={styles.txtInput} selectionColor='#12375C' outlineColor='#12375C'
        activeOutlineColor='#12375C' left={<TextInput.Icon icon="key-outline" />}
       mode="outlined" secureTextEntry={true} label="Password"/>
      </View>
      
    
      <TouchableOpacity style={styles.BtnView} onPress={() => navigation.navigate('Menu')}>
              <Text style={styles.BtnText}>Entrar</Text>
      </TouchableOpacity>
     

    </View>
  );
}