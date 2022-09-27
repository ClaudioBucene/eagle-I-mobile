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
      <TextInput left={<TextInput.Icon icon="account-outline" />}  mode="outlined" label="Username"/>
      </View>
      
      <View style={styles.inputView}>
      <TextInput left={<TextInput.Icon icon="key-outline" />} mode="outlined" secureTextEntry={true} label="Password"/>
      </View>
      
      <View style={styles.loginBtn}>
        <Button buttonColor='#12375C' icon="login" mode="contained" onPress={() => 
        navigation.navigate('Menu')}> Entrar </Button>
      </View>
    </View>
  );
}
