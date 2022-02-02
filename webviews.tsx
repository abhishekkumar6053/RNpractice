import * as React from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';
const Webview=()=> {
  return (
    <View style={{flex:1}}>
    <WebView
    source={{ uri: 'https://www.google.com/' }}
    style={{flex:1 ,marginTop:5}}
  />
  </View>
  );
}
export default Webview;







