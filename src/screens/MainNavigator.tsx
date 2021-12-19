import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './signScreen/Login';
import SignUp from './signScreen/SignUp';
import TabNavigator from './TabNavigator';
// import DrawerContent from './DrawerContent';
import {createStackNavigator} from '@react-navigation/stack';

// const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    // <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    //   <Drawer.Screen name="Login" component={Login} />
    //   <Drawer.Screen name="SignUp" component={SignUp} />
    //   <Drawer.Screen
    //     name="TabNavigator"
    //     component={TabNavigator}
    //     options={{title: 'Home'}}
    //   />
    // </Drawer.Navigator>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
}
