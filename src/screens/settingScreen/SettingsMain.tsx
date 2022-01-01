import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from '../../theme';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
const items = [
  {name: '문의한 방', component: "login"},
  {name: '연락한 부동산', component: "login"},
  {name: '매물번호 조회', component: "login"},
  {name: '이벤트', component: "login"},
  {name: '자주 묻는 질문', component: "login"},
  {name: '공지사항', component: "login"},
  {name: '1:1 문의', component: "login"},
  {name: '방 내놓기', component: "login"},
];


export default function SettingsMain() {

  const navigation = useNavigation<any>()

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.countsView}>
          <Icon name="user-circle" size={35}/>
        </View>
        <Text style={styles.text}>로그인 > </Text>
      </View>
      <View style={styles.flat_container}>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.component)}>
              <Text style={styles.flat_text}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
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
  flat_container: {
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
  flat_text: {
    fontSize: 16,
  },
});
