import * as React from 'react';
import {Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './styles';
import ProfilePic from '../../../../assets/foto.svg'
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Users() {
    return (
        <View style={styles.container}>
            <View style={styles.subview}>
                <ProfilePic width={'20%'}/>
                <Text style={styles.txtstyle}>Username</Text>
            </View>

            <View style={styles.toview}>
                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Ionicons name="information-circle-outline" size={30} color="#12375C"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
