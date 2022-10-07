import * as React from 'react';

import {FlatList, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './styles';
import ProfilePic from '../../../../assets/foto.svg'
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function Users() {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {
                        key: 'Devin'
                    }, {
                        key: 'Dan'
                    }, {
                        key: 'Dominic'
                    }, {
                        key: 'Jackson'
                    }, {
                        key: 'Joel'
                    }, {
                        key: 'John'
                    }, {
                        key: 'Josh'
                    }, {
                        key: 'Tyler'
                    }, {
                        key: 'Jonathan'
                    }, {
                        key: 'Justin'
                    }, {
                        key: 'Jillian'
                    }, {
                        key: 'Jimmy'
                    }, {
                        key: 'Julie'
                    }
                ]}
                renderItem={({item}) => 
        <> 
            <View style = {styles.subview}> 
                <View style={styles.leftview}>
                <ProfilePic width={'20%'}/>
                <Text style={styles.txtstyle}>{item.key}</Text>
                </View>
                
                <TouchableOpacity style={styles.tostyle} onPress={() => navigation.navigate('Viaturas')}>
                <Ionicons name="information-circle-outline" size={30} color="#12375C"/>
                </TouchableOpacity>
            </View>
        </>
                }
            />

        </View>
    );
}
