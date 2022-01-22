import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from '../../theme';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import {TouchableOpacity} from 'react-native';

const flat_items = [
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
          <Icon name="user-circle" size={35} color={Colors.white}/>
        </View>
        <Text style={styles.text}>로그인 > </Text>
      </View>

      <View style={styles.flat_container}>
        <FlatList
          data={flat_items}
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
      
      <View style={styles.temrs_view}>
      <Text style={styles.terms_text} onPress={() => navigation.navigate("settingsWebView")}>이용 약관</Text> 
      <View style={styles.vertical_lines}></View>
      <Text style={styles.terms_text} onPress={() => navigation.navigate("settingsWebView")}>개인정보 처리방침</Text> 
      <View style={styles.vertical_lines}></View>
      <Text style={styles.terms_text} onPress={() => navigation.navigate("settingsWebView")}>회사 소개</Text> 
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    flex: 1
  },
  view: {
    backgroundColor: Colors.blue500,
    width: "100%",
    flexDirection: 'row',
    alignItems: "center",
  },
  text: {
      fontSize: 20,
      color: Colors.white
      
  },
  countsView: {
    backgroundColor: Colors.blue500,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  flat_container: {
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: '3%',
    backgroundColor: Colors.white,
    borderColor: Colors.grey300,
  },
  flat_text: {
    fontSize: 16,
  },
  temrs_view: { 
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.white,
    margin: 10
  },
  terms_text: {
    textAlign: "center",
    color: Colors.grey800
  },
  vertical_lines: {
    width: 2,
    height: "100%",
    backgroundColor: Colors.grey300,
    marginLeft: 10,
    marginRight: 10
  }
});
