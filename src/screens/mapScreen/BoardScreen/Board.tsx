/*
    Depth : src 기준 3단계 ('../../../)
    설명 : Board 구현 
*/

import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// prettier-ignore
import {View, Text, NavigationHeader, TopBar, TouchableView} from '../../../theme'
import {useInterval} from '../../../hooks';
import type {AppState} from '../../../store';
import * as C from '../../../store/clock';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

export default function Map() {
  const navigation = useNavigation<any>();

  const goMap = useCallback(() => {
    navigation.navigate('Map');
  }, []);

  return (
    <View style={[styles.flex]}>
      <NavigationHeader title="Board" />
      <View style={[styles.flex, styles.textView]}>
        <Text style={[styles.text]}>{'무현이 작업 공간'}</Text>
      </View>
      <TouchableView
        notification
        style={[styles.touchableView]}
        onPress={goMap}>
        <Text style={[styles.text]}>goMap</Text>
      </TouchableView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  textView: {alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 30},
  touchableView: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
