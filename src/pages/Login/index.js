import * as React from 'react';
import { View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';



export default function App() {

  return (
      <View style={styles.container}>

      <View style={styles.inputView}>
      <TextInput left={<TextInput.Icon icon="account-outline" />}  mode="outlined" label="Username"/>
      </View>
      
      <View style={styles.inputView}>
      <TextInput left={<TextInput.Icon icon="key-outline" />} mode="outlined" secureTextEntry={true} label="Password"/>
      </View>
      
      <View style={styles.loginBtn}>
        <Button icon="login" mode="contained" onPress={() => null}> Entrar </Button>
      </View>
    </View>
  );
}
