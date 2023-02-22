import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../assets/styles/styles';

import AuthHeader from '../components/Auth.Header';
import Input from '../components/Input';
import SocialMedia from '../components/SocialMedia';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../redux/features/index';
import colors from '../assets/styles/colors';

function Login() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [login, setLogin] = React.useState({ email: '', password: '' });
    const message = useSelector((state: any) => state.Auth.message);

    const onSubmit = async () => {
        await axios.post(`http://172.16.10.62:5000/api/auth/login`, login)
            .then((res) => {
                if (!res.data.token) {
                    dispatch(LOGIN_FAIL(res.data))
                } else {
                    dispatch(LOGIN_SUCCESS(res.data))
                    Alert.alert('Login Success', message)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <View style={[styles.auth, { justifyContent: 'space-between' }]}>
            <AuthHeader />
            <View style={styles.authForm}>
                <Text style={{ color: colors.black }}>{message}</Text>
                <Input placeholder="Email" type='email' onChangeText={(value: any) => setLogin({ ...login, email: value })} />
                <Input placeholder="Password" type='password' onChangeText={(value: any) => setLogin({ ...login, password: value })} />
                <View style={styles.Forget}>
                    <Text style={styles.textForget} >Forget Password ?</Text>
                </View>
                <View style={styles.btns}>
                    <Text style={styles.btnsLink} onPress={() => navigation.navigate('Register')}>Register</Text>
                    <Text style={styles.btnsBtn} onPress={onSubmit} >Login</Text>
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