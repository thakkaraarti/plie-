import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/Login/LoginScreen';
import BottomTabs from './BottomTabs';
import SplashScreen from '../screens/splash/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('userToken');
      console.log('TOKEN:', token);
      setIsLoggedIn(!!token); 
    };

    checkLogin();
  }, []);

  if (isLoggedIn === null) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Splash'
      screenOptions={{ headerShown: false }}>
        
         <Stack.Screen name="Splash" component={SplashScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={BottomTabs} />
        {/* {isLoggedIn ? (
          <Stack.Screen name="Main" component={BottomTabs} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
