import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DragpanResponderView from './View/DragpanResponderView';
import DragAndSpringpanResponderView from './View/DragAndSpringpanResponderView';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DragpanResponderView" component={DragpanResponderView}></Tab.Screen>
      <Tab.Screen name="DragAndSpringpanResponderView" component={DragAndSpringpanResponderView}></Tab.Screen>
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