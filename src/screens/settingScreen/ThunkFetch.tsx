import React, {useCallback, useEffect} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Colors} from 'react-native-paper';
import {SafeAreaView, View, Text, TopBar, UnderlineText} from '../../theme';
import type {AppState} from '../../store';
import * as H from '../../store/humor';
import SettingsList from './SettingsList';
import UserView from './UserView';
export default function ThunkFetch() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <UserView />
      <SettingsList />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {fontSize: 20, textAlign: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
