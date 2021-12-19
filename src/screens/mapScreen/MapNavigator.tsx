import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';
import {useNavigationHorizontalInterpolator} from '../../hooks';
import Map from './Map';
import Board from './BoardScreen/Board';
// import Home from './Home';
// import HomeLeft from './HomeLeft';
// import HomeRight from './HomeRight';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const interpolator = useNavigationHorizontalInterpolator();
  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal-inverted',
      cardStyleInterpolator: interpolator,
    }),
    [],
  );
  const rightOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator,
    }),
    [],
  );
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Board" component={Board} />
    </Stack.Navigator>
  );
}
