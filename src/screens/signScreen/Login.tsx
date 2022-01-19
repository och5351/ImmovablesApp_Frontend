import React, {useState, useCallback, useEffect} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// prettier-ignore
import {SafeAreaView, View, Text, TextInput, TouchableView, UnderlineText}
    from '../../theme'
import * as D from '../../data';
import {useAutoFocus, AutoFocusProvider} from '../../contexts';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import * as U from '../../utils';
import * as L from '../../store/login';
import {Colors} from 'react-native-paper';
import Color from 'color';

let {width, height} = Dimensions.get('window');

// prettier-ignore
export default function Login() {

  const {loggedIn} = useSelector<AppState, L.State>(({login})=> login)

  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const focus = useAutoFocus();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch()
  // prettier-ignore
  const goTabNavigator = useCallback(() => {
    // dispatch(L.loginAction({email, name, password}))
    navigation.navigate('TabNavigator')}, [])
  const goSignUp = useCallback(() => navigation.navigate('SignUp'), []);

  useEffect(() => {
    U.readFromstorage(L.loggedUserKey)
    .then((value) => {
      if(value.length > 0){
        const savedUser = JSON.parse(value)
        setEmail(savedUser.email)
        setName(savedUser.name)
        setPassword(savedUser.password)
      }
    })
    .catch((e)=> {})
  }, [loggedIn])
  // prettier-ignore
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
          {/*어디살래? 문구 삽입*/}
          <View style={styles.titleTextView}>
            <Text style={styles.titleText}>어디</Text>
            <Text style={styles.titleText}>  살래?</Text>
          </View>
          {/* OAuth2.0 아이콘 삽입 */}
          <View style={styles.iconView}></View>
          {/* 로그인 없이 메인 스크린 진입 */}
          <TouchableOpacity 
           style={styles.titleTextView}
           onPress={goTabNavigator}
           >
            <Text style={styles.notSignInText}>
            로그인 없이 둘러보기
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue500,
  },
  titleTextView: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue500,
  },
  titleText: {
    fontSize: 50,
    color: 'white',
    backgroundColor: Colors.blue500,
  },
  iconView: {
    flex: 3,
  },
  notSignInTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue500,
  },
  notSignInText: {
    fontSize: 20,
    color: 'white',
  },
});
