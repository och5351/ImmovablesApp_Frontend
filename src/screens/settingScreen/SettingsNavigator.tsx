import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsMain from './SettingsMain';
import Login from '../signScreen/Login';

const Stack = createStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="settingsMain" component={SettingsMain} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
