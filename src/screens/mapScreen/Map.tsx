/*
    Depth : src 기준 2단계 ('../../')
    설명 : Map 구현
*/
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// prettier-ignore
import {View, Text, NavigationHeader, TopBar, TouchableView} from '../../theme'
// import {useInterval} from '../../hooks';
// import type {AppState} from '../../store';
// import * as C from '../../store/clock';
// import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

export default function Map() {
  const navigation = useNavigation<any>();

  const goBoard = useCallback(() => {
    navigation.navigate('Board');
  }, []);
  return (
    <View style={[styles.flex]}>
      <NavigationHeader title="Map" />
      <TopBar />
      <View style={[styles.flex, styles.textView]}>
        <Text style={[styles.text]}>{'윤인호 작업'}</Text>
      </View>
      <TouchableView
        notification
        style={[styles.touchableView]}
        onPress={goBoard}>
        <Text style={[styles.text]}>goBoard</Text>
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
