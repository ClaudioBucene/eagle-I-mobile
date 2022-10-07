import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';

import MyTabs from './MyTabs';
import styles from './styles';

import Logo from '../../../assets/logo.svg';
import ProfilePic from '../../../assets/foto.svg';

export default function Viaturas() {
    return (
        <View style={styles.container}>

            <View style={styles.view1}></View>

            <View style={styles.view2}>
                <Logo width='25%'/>
                <ProfilePic width='10%'/>
            </View>

            <View style={styles.view3}>
                <NavigationContainer independent='true'>
                    <MyTabs/>
                </NavigationContainer>
            </View>

        </View>
    );
}
