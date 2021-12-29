import React from 'react';
import {View, Text} from '../../theme/paper';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const items = [
  '문의한 방',
  '연락한 부동산',
  '매물번호 조회',
  '이벤트',
  '자주 묻는 질문',
  '공지사항',
  '1:1 문의',
  '방 내놓기',
];

export default function SettingsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text
              style={styles.text}
              onPress={index => {
                console.log(' ');
                console.log(index);
                console.log(' ');
              }}>
              {item}
            </Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: '2%',

    borderColor: Colors.grey300,
  },
  text: {
    fontSize: 16,
  },
});
