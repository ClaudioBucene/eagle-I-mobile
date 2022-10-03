import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './MyTabs';

export default function Menu() {
  return (
    <NavigationContainer independent='true'>
      <MyTabs />
    </NavigationContainer>
  );
}
