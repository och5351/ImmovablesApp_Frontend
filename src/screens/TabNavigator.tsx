import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from './homeScreen/HomeNavigator';
// import Counter from './counterScreen/Counter';
// import Clock from './clockScreen/Clock';
// import People from './peopleScreen/People';
// import UseReducer from './UseReducer';
// import Fetch from './fetch/Fetch';
import MapNavigator from './mapScreen/MapNavigator';
import Setting from './settingScreen/Settings';
import type {RouteProp, ParamListBase} from '@react-navigation/native';

type TabBarIconProps = {focused: boolean; color: string; size: number};

const icons: Record<string, string[]> = {
  HomeNavigator: ['home-circle', 'home-circle-outline'],
  // Counter: ['eye-plus', 'eye-plus-outline'],
  // Clock: ['clock-alert', 'clock-alert-outline'],
  // People: ['account-group', 'account-group-outline'],
  // UseReducer: ['group', 'ungroup'],
  // Fetch: ['eye-plus', 'eye-plus-outline'],
  MapNavigator: ['map', 'map-outline'],
  Setting: ['clock-alert', 'clock-alert-outline'],
};

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route;
      const focusedSize = focused ? size + 6 : size;
      const focusedColor = focused ? Colors.lightBlue500 : color;
      const [icon, iconOutline] = icons[name];
      const iconName = focused ? icon : iconOutline;
      return <Icon name={iconName} size={focusedSize} color={focusedColor} />;
    },
  };
};
const Tab = createBottomTabNavigator();
// prettier-ignore
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home', }}//tabBarBadge: 3}}
      />
      {/* <Tab.Screen name="Counter" component={Counter}/>
      <Tab.Screen name="Clock" component={Clock} />
      <Tab.Screen name="People" component={People} />
      <Tab.Screen name="UseReducer" component={UseReducer} /> */}
      <Tab.Screen name="MapNavigator" 
      component={MapNavigator}
      options={{tabBarLabel: 'Map',}} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  )
}
