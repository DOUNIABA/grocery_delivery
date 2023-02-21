import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../assets/styles/styles';

import AuthHeader from '../components/Auth.Header';
import Input from '../components/Input';
import SocialMedia from '../components/SocialMedia';

import ApiLogin from '../services/auth.services';

function Login() {
    const navigation = useNavigation();

    const [login, setLogin] = React.useState({ email: '', password: '' });

    return (
        <View style={[styles.auth, { justifyContent: 'space-between' }]}>
            <AuthHeader />
            <View style={styles.authForm}>
                <Input placeholder="Email" type='email' onChangeText={(value: any)=>setLogin({ ...login, email: value })} />
                <Input placeholder="Password" type='password' onChangeText={(value: any)=>setLogin({ ...login, password: value })} />
                <View style={styles.Forget}>
                    <Text style={styles.textForget} >Forget Password ?</Text>
                </View>
                <View style={styles.btns}>
                    <Text style={styles.btnsLink} onPress={() => navigation.navigate('Register')}>Register</Text>
                    <Text style={styles.btnsBtn} onPress={() => { ApiLogin(login) }} >Login</Text>
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