import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';

export default function Login() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>

      <View style={styles.inputView}>
      <TextInput style={styles.txtInput} left={<TextInput.Icon icon="account-outline" />} 
       mode="outlined" labelTextColor="red" label="Username"
       selectionColor='#12375C' outlineColor='#12375C' activeOutlineColor='#12375C'/>
      </View>
      
      <View style={styles.inputView}>
      <TextInput style={styles.txtInput} left={<TextInput.Icon icon="key-outline" />}
       mode="outlined" secureTextEntry={true} label="Password"
       selectionColor='#12375C' outlineColor='#12375C' activeOutlineColor='#12375C'/>
      </View>
      
      <View style={styles.loginBtn}>
        <Button buttonColor='#9db50d' icon="login" mode="contained" onPress={() => 
        navigation.navigate('Menu')}> Entrar </Button>
      </View>
    </View>
  );
}
