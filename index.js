/**
 * @format
 */

import { TabActions } from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppParent from './AppParent';
import butto from './buttons';
import Cat from './Cat';
import createboxs from './createboxs';
import flex from './flex';
import flex2 from './flex2';
import flex3 from './flex3';
import flexS from './flexS';
import Navi from './Navigation';
import practice from './practice';
import dash from './dash';
import Webview from './webviews';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => flex);
// AppRegistry.registerComponent(appName, () => flex2);
// AppRegistry.registerComponent(appName, () => flex3);
// AppRegistry.registerComponent(appName, () => flexS);
// AppRegistry.registerComponent(appName, () => practice);
// AppRegistry.registerComponent(appName, () => AppParent);
// AppRegistry.registerComponent(appName, () => Navi);
// AppRegistry.registerComponent(appName, () => dash);
AppRegistry.registerComponent(appName, () => Webview );
// AppRegistry.registerComponent(appName, () => createboxs);
// AppRegistry.registerComponent(appName, () => butto);