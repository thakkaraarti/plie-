/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginScreen from './src/screens/Login/LoginScreen';
import AppNavigator from './src/navigation/navigationContainer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/redux/store';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </SafeAreaProvider>
     </PersistGate>
    </Provider>
  );
}




export default App;
