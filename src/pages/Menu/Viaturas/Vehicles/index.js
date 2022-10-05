import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Vehicles() {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
        <Text>Viaturas</Text>
    </View>
    )
}
