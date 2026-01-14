import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    
} from 'react-native';
import { styles } from './LoginScreenStyle';
import GoogleIcon from '../../assets/svg/google.svg';
import AppleIcon from '../../assets/svg/appleLogo.svg';
import FacebookIcon from '../../assets/svg/facebooklogo.svg';
import Eye from '../../assets/svg/Eye.svg';
import EyeClosed from '../../assets/svg/eye-closed.svg';
import { notifyMessage } from '../../globalFunctions/functions';
import IndicatorModal from '../../components/IndicatorModal';
import { API_URL } from '../../components/string';
import {useDispatch, useSelector} from 'react-redux';
import {setToken, setUsername} from '../../redux/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}:any) => {
    const dispatch = useDispatch();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [isAnimate, setAnimate] = useState(false);

    const loginApi = async () => {
        setAnimate(true);
    try {
        const formdata = new FormData();
        formdata.append('email', email);
        formdata.append('password', password);
    //   const param = JSON.stringify({
    //     email: email,
    //     password: password,
    //   });
      const resp = await fetch(`${API_URL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formdata,
      });
      const data = await resp.json();
      console.log(data,'data----');
      
      if (data.success) {
        console.log("success--");
        setAnimate(false);
        dispatch(setUsername(data?.data?.user?.usr_fname));
       await AsyncStorage.setItem('userToken', data?.data?.token);
       navigation.replace('Main')
      
      } else {
        notifyMessage('Invalid Username / Password .');
        setAnimate(false);
      }
    } catch (error) {
      setAnimate(false);
    }
  };

    return (
        <SafeAreaView style={styles.container}>
            <IndicatorModal isLoading={isAnimate} />
            <View style={styles.header}>
                <Text style={styles.logoText}>Plié</Text>
                <View style={styles.imagePlaceholder}>
                    {/* <Image
            source={require('../../assets/images/background.png')}
            style={styles.placeholderIcon}
          /> */}
                </View>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="email@email.com"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        {!passwordVisible ? <EyeClosed height={24} width={24} /> : <Eye height={24} width={24} />}

                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => loginApi()}
                // onPress={()=>navigation.navigate('Main')}
                style={styles.signInButton}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <Text style={{fontSize:12}}>Not a member? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupText}>Sign Up Here</Text>
                    </TouchableOpacity>
                </View>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.orText}>or Sign In with</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialContainer}>
                    <GoogleIcon style={styles.socialIcon} />
                    <AppleIcon style={styles.socialIcon} />
                    <FacebookIcon style={styles.socialIcon} />
                </View>

                <TouchableOpacity style={styles.guestContainer}>
                    <Text style={styles.guestText}>Enter as Guest</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
