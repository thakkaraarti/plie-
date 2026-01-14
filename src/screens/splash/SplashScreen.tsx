import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet ,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }:any) => {

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('userToken');

      setTimeout(() => {
        if (token) {
          navigation.replace('Main');
        } else {
          navigation.replace('Login');
        }
      }, 1000); // optional delay for UX
    };

    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
        <Image
       style={{ height:'100%'}}
        source={require('../../assets/images/background.png')} 
        />    
      {/* <ActivityIndicator size="large" color="#000" /> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
