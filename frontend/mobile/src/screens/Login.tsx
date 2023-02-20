import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

import AuthHeader from '../components/Auth.Header';
import Input from '../components/Input';
import SocialMedia from '../components/SocialMedia';

function Login() {
    const navigation = useNavigation();
    return (
        <View style={[styles.auth, { justifyContent: 'space-between' }]}>
            <AuthHeader />
            <View style={styles.authForm}>
                <Input placeholder="Email" type='email' />
                <Input placeholder="Password" type='password' />
                <View style={styles.Forget}>
                    <Text style={styles.textForget} >Forget Password ?</Text>
                </View>
                <View style={styles.btns}>
                    <Text style={styles.btnsLink} onPress={() => navigation.navigate('Register')}>Register</Text>
                    <Text style={styles.btnsBtn}>Login</Text>
                </View>
                <View style={styles.authFooter}>
                    <Text style={styles.authFooterLine}></Text>
                    <Text style={styles.authFootertext}>Or</Text>
                    <Text style={styles.authFooterLine}></Text>
                </View>
                <SocialMedia />
            </View>
        </View>
    );
}

export default Login;