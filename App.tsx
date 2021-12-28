import 'react-native-gesture-handler';
import React, {useEffect, useState, useCallback} from 'react';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// prettier-ignore
import {NavigationContainer, DefaultTheme, DarkTheme}
  from '@react-navigation/native'
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {Provider as ReduxProvider} from 'react-redux';
import {ToggleThemeProvider} from './src/contexts';
import MainNavigator from './src/screens/MainNavigator';
import {makeStore} from './src/store';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

const store = makeStore();

export default function App() {
  const scheme = useColorScheme(); // 'dark' 혹은 'light'
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(
    () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
    [],
  );
  //Splash 화면을 위한 함수 생성
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide()
      }, 2000); // 2초 지정 -> 데이터를 미리 받아와야 하는 작업 논의 후 함수 지정
    }catch(e){
      console.log("Splash 화면 에러")
      console.log(e)
    }
  });

  return (
    <AppearanceProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <ReduxProvider store={store}>
            <NavigationContainer theme={theme}>
              <MainNavigator />
            </NavigationContainer>
          </ReduxProvider>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </AppearanceProvider>
  );
}
