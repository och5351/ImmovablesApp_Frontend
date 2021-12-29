import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {faUserCircle, faAddressBook} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {TopBar, View, Text} from '../../theme';
import {StyleSheet, Image} from 'react-native';
import {Colors} from 'react-native-paper';

export default function UserView() {
  return (
    <TopBar noSwitch>
      <View style={styles.view}>
        <View style={styles.countsView}>
            
          <Icon name="user-circle" size={35}/>
        </View>
        <Text style={styles.text}>로그인 > </Text>
      </View>
    </TopBar>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.blue200,
    width: "100%",
    flexDirection: 'row',
    alignItems: "center",
  },
  text: {
      fontSize: 20,
      
  },
  countsView: {
    backgroundColor: Colors.blue200,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
});
