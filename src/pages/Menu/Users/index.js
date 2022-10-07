import * as React from 'react';

import {SectionList, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './styles';
import ProfilePic from '../../../../assets/foto.svg'
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function Users() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    {title: 'A', data: ['Anne', 'Anderson', 'Alok','Alex','Austin']},
                    {title: 'B', data: ['Ben', 'Benedita', 'Benícia','Benício','Boris']},
                    {title: 'D', data: ['Dennis','Devin', 'Dan', 'Dominic']},
                    {title: 'E', data: ['Elias']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem={({item}) => 
        <> 
            <View style = {styles.subview}> 
                <View style={styles.leftview}>
                <ProfilePic width={'30'}/>
                <Text style={styles.txtstyle}>{item}</Text>
                </View>
                
                <TouchableOpacity style={styles.tostyle} onPress={() => navigation.navigate('Viaturas')}>
                <Ionicons name="information-circle-outline" size={30} color="#12375C"/>
                </TouchableOpacity>
            </View>
        </>
                }
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => `basicListEntry-${item.title}`}
            />

        </View>
    );
}
