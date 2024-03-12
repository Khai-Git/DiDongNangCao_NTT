import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cau1 from '../Lab_04_05_06_Animation/Exercise/Cau1';
import Cau2 from '../Lab_04_05_06_Animation/Exercise/Cau2';
import Cau3 from '../Lab_04_05_06_Animation/Exercise/Cau3';
import Cau4 from '../Lab_04_05_06_Animation/Exercise/Cau4';
import Cau5 from '../Lab_04_05_06_Animation/Exercise/Cau5';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cau1" component={Cau1}></Tab.Screen>
      <Tab.Screen name="Cau2" component={Cau2}></Tab.Screen>
      <Tab.Screen name="Cau3" component={Cau3}></Tab.Screen>
      <Tab.Screen name="Cau4" component={Cau4}></Tab.Screen>
      <Tab.Screen name="Cau5" component={Cau5}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}