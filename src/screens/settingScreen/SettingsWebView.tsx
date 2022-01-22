import React from 'react';
import {WebView} from 'react-native-webview';
export default function SettingsWebView() {
  return <WebView source={{html: '<h1>test</h1>'}} />;
}
